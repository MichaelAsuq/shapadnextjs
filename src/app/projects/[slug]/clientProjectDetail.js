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
             <>
            <section className='bg-black'>
                <div>
                    <Container className="text-center text-white py-5">
                        <h1 className="display-4 fw-bold"></h1>
                    </Container>
                </div>
                <Container className="py-3">
                    <div className="row justify-content-center" >
                        <div className="col-md-10">
                            <h1 style={{ fontSize: '2.5rem', fontFamily: 'lato', color: 'white', lineHeight: '3rem', fontWeight: '600', marginBottom: '10px' }}> {project.product_title}</h1>
                            <p style={{ fontWeight: '500', fontSize: '16px', color: 'white' }}>{project.date}</p>

                            <p style={{ fontWeight: '500', fontSize: '16px', color: 'grey', marginTop: '2rem' }}>Overview</p>
                            <div className="project-details">
                                {project.description && (
                                    <div className="mb-4">
                                        <p style={{ fontSize: '1.2rem', fontFamily: 'lato', color: 'white', lineHeight: '1.8rem', fontWeight: '300', }} >{project.description}</p>
                                    </div>
                                )}
                            </div>
                            {project.videos_url1 && (
                                <div className="mb-4">
                                    <video ref={videoRef} autoPlay muted loop playsInline onEnded={handleVideoEnd} style={{ width: '100%', height: '100%', }}>
                                        <source src={project.videos_url1} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            )}

                            {project.main_image && (
                                <div className='mb-4' style={{ position: 'relative', width: '100%', height: '500px' }}>
                                    <Image
                                        src={project.main_image}
                                        alt={project.product_title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded"
                                    />
                                </div>
                            )}
                            {project.images_url1 && (
                                <div className='mb-4' style={{ position: 'relative', width: '100%', height: '500px' }}>
                                    <Image
                                        src={project.images_url1}
                                        alt={project.product_title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded"
                                    />
                                </div>
                            )}
                            {project.videos_url2 && (
                                <div className="mb-4">
                                    <video ref={videoRef} autoPlay muted loop playsInline onEnded={handleVideoEnd} style={{ width: '100%', height: '100%', }}>
                                        <source src={project.videos_url2} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            )}

                            <div className='row'>
                                <div className='col-md-6 '>
                                    {project.images_url1 && (
                                        <div className='mb-4' style={{ position: 'relative', width: '100%', height: '500px' }}>
                                            <Image
                                                src={project.images_url1}
                                                alt={project.product_title}
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded"
                                            />
                                        </div>
                                    )}
                                </div>

                                <div className='col-md-6'>
                                    {project.images_url2 && (
                                        <div className='mb-4' style={{ position: 'relative', width: '100%', height: '500px' }}>
                                            <Image
                                                src={project.images_url2}
                                                alt={project.product_title}
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                            {project.images_url10 && (
                                <div className='mb-4' style={{ position: 'relative', width: '100%', height: '500px' }}>
                                    <Image
                                        src={project.images_url10}
                                        alt={project.product_title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded"
                                    />
                                </div>
                            )}
                            {project.videos_url3 && (
                                <div className="mb-4">
                                    <video ref={videoRef} autoPlay muted loop playsInline onEnded={handleVideoEnd} style={{ width: '100%', height: '100%', }}>
                                        <source src={project.videos_url3} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            )}
                            <div className='row'>
                                <div className='col-md-6 '>
                                    {project.images_url3 && (
                                        <div className='mb-4' style={{ position: 'relative', width: '100%', height: '500px' }}>
                                            <Image
                                                src={project.images_url3}
                                                alt={project.product_title}
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded"
                                            />
                                        </div>
                                    )}
                                </div>

                                <div className='col-md-6'>
                                    {project.images_url4 && (
                                        <div className='mb-4' style={{ position: 'relative', width: '100%', height: '500px' }}>
                                            <Image
                                                src={project.images_url4}
                                                alt={project.product_title}
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>

                            {project.images_url9 && (
                                <div className='mb-4' style={{ position: 'relative', width: '100%', height: '500px' }}>
                                    <Image
                                        src={project.images_url9}
                                        alt={project.product_title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded"
                                    />
                                </div>
                            )}

                            <div className='row'>
                                <div className='col-md-6 '>
                                    {project.images_url5 && (
                                        <div className='mb-4' style={{ position: 'relative', width: '100%', height: '500px' }}>
                                            <Image
                                                src={project.images_url5}
                                                alt={project.product_title}
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded"
                                            />
                                        </div>
                                    )}
                                </div>

                                <div className='col-md-6'>
                                    {project.images_url6 && (
                                        <div className='mb-4' style={{ position: 'relative', width: '100%', height: '500px' }}>
                                            <Image
                                                src={project.images_url6}
                                                alt={project.product_title}
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-6 '>
                                    {project.images_url7 && (
                                        <div className='mb-4' style={{ position: 'relative', width: '100%', height: '500px' }}>
                                            <Image
                                                src={project.images_url7}
                                                alt={project.product_title}
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded"
                                            />
                                        </div>
                                    )}
                                </div>

                                <div className='col-md-6'>
                                    {project.images_url8 && (
                                        <div className='mb-4' style={{ position: 'relative', width: '100%', height: '500px' }}>
                                            <Image
                                                src={project.images_url8}
                                                alt={project.product_title}
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </Container>
            </section>
        </>
    );

}
