import Breadcrumb from "../components/breadcrumb";
import Navbar from "../components/navbar";

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <Breadcrumb data={[{ label: 'Dashboard', path: '/dashboard' }]} />
            <div>
                DASHBOARD PAGE
            </div>
        </div>
    );
}

export default Dashboard;