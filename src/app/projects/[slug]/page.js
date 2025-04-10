
import { fetchProjects, generateSlug } from '/lib/utils';
import ClientProjectDetail from './clientProjectDetail';

export async function generateStaticParams() {
    const projects = await fetchProjects();
    return projects.map((project) => ({
        slug: generateSlug(project.product_title),
    }));
}

export default async function ProjectDetailPage({ params }) {
    const projects = await fetchProjects();
    const project = projects.find(p => generateSlug(p.product_title) === params.slug);

    return <ClientProjectDetail initialProject={project} slug={params.slug} />;
}

export const revalidate = 3600; // Revalidate every hour