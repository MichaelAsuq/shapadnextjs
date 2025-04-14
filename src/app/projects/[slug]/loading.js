// app/projects/[slug]/loading.js
export default function Loading() {
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="spinner-border spinner-border-lg text-black me-2" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mb-0  fs-3 ">Loading projects...</p>
        </div>
    );
}
