const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

function LinkButton({ link, label, newTab }) {
    if (newTab === "true") {
        return (
            <a className="btn btn-primary" href={link} target="_blank">{label}</a>
        )
    }
    return (
        <a className="btn btn-primary" href={link}>{label}</a>
    )
}

function App() {
    return (
    <>
        <h1>This site is being rebuilt with NextJS</h1>
        <LinkButton link="public/resume_kevin_van_nguyen_kvnbanunu.pdf" label="Resume" newTab="false" />
        <LinkButton link="https://github.com/kvnbanunu" label="Github" newTab="true" />
        <LinkButton link="https://www.linkedin.com/in/kvnbanunu/" label="LinkedIn" newTab="true" />
    </>
    )
}

root.render(<App />);
