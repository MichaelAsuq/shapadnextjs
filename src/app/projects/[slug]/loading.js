// app/projects/[slug]/loading.js
export default function Loading() {
    return (
        <div className="container text-center py-5">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading project details...</p>
        </div>
    );
}