'use client'
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import { useState, useEffect, useRef } from 'react';
import { fetchProjects, generateSlug } from '/lib/utils';


export default function ProjectDetail({ initialProject, slug }) {
    const [project, setProject] = useState(initialProject);
    const [isLoading, setIsLoading] = useState(!initialProject);
    const videoRef = useRef(null);

    useEffect(() => {
        const loadProject = async () => {
            if (initialProject) return;

            try {
                const projects = await fetchProjects();
                const foundProject = projects.find(p => generateSlug(p.product_title) === slug);

                if (!foundProject) {
                    throw new Error('Project not found');
                }

                setProject(foundProject);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        loadProject();
    }, [slug, initialProject]);

    const handleVideoEnd = () => {
        if (videoRef.current) {
            videoRef.current.play(); // Replay the video
        }
    };

    if (isLoading) {
        return (
            <div className="container text-center py-5">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3">Loading project details...</p>
            </div>
        );
    }

    if (!project) {
        return <div className="container py-5">Project not found</div>;
    }


    return (
         <section className='bg-black'>
                <div className={styles.banner}>
                    <Container className="text-center text-white py-5">
                        <h1 className="display-4 fw-bold"></h1>
                    </Container>
                </div>
                <Container>

                    <Container className="text-center my-5">
                        <h1 className="display-4 text-white fw-bold">Our Projects</h1>
                        <p className="lead text-white mt-3">
                            Explore our collection of innovative projects, showcasing creativity,
                            functionality, and excellence. Click on any project to learn more!
                        </p>
                    </Container>

                    {loading && (
                        <div className="d-flex justify-content-center align-items-center min-vh-100">
                            <div className="spinner-border text-white me-2" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <p className="mb-0  fs-3 ">Loading projects...</p>
                        </div>
                    )}

                    {error && (
                        <div className="alert alert-danger ">
                            <strong>Error:</strong> {error}
                            <p>Check your browser console for more details.</p>
                        </div>
                    )}

                    {!loading && !error && (
                        <div>

                            <Row >
                                {items.map((item, index) => (
                                    <Col key={index} md={4} className="mb-4">
                                        <Link className='text-decoration-none text-black' href={`/projects/${generateSlug(item.product_title)}`}>
                                            <div className={styles.projectContainer}>
                                                {item.main_image && (
                                                    <Image
                                                        src={item.main_image}
                                                        alt="Project Image"
                                                        width={450}
                                                        height={450}
                                                        className={styles.projectImg}
                                                        style={{ objectFit: 'cover' }}
                                                    />
                                                )}
                                                <div className="mt-5">
                                                    <h3 className="card-title text-white">{item.product_title}</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    )}

                </Container>
            </section>
    );

}
