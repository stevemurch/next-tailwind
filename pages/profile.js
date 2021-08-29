import Breadcrumb from "../components/breadcrumb";
import Navbar from "../components/navbar"

const Profile = () => {
    return (
        <div>
            <Navbar />
            <Breadcrumb data={[{ label: 'Profile', path: '/profile' }]} />
            <div>Profile</div>
        </div>
    );
}

export default Profile;