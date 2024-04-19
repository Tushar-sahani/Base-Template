import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Timeline from '../components/Timeline';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';
function Home() {
    const params = useParams();
    const navigate = useNavigate();
    const userId = '65b3a22c01d900e96c4219ae'; //John doe

    const BASE_URL = 'https://portfolio-backend-30mp.onrender.com/api/v1';

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSending, setIsSending] = useState(false);

    useEffect(() => {
        document.cookie = `portfolio-name=portfolio1`;
        const fetchUserData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/get/user/${params?.user ?? userId}`);

                const userData = await response.json();

                document.title = `${userData?.user?.about?.name + ' - ' + userData?.user?.about?.title}`;
                setUser(userData?.user);
                setIsLoading(false);
                document.body.classList.remove('loaded');
            } catch (error) {
                navigate('/');
                setIsLoading(true);
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [params?.user, userId, navigate]);
    console.log(user);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);

        const formData = Object.fromEntries(new FormData(e.target).entries());
        const body = {
            ...formData,
            toEmail: 'ayushbhardwaj5718@gmail.com',
            toName: user?.about?.name,
        };

        try {
            const response = await fetch(`${BASE_URL2}/temp/user-email/contact`, {
                method: 'POST',
                body: JSON.stringify(body), // You may need to adjust the serialization based on your server's expectations
                headers: {
                    'Content-Type': 'application/json', // Set the appropriate content type
                },
            });

            if (response.ok) {
                alert('Message sent successfully!');
                e.target.reset();
                // Handle success, such as showing a success message to the user
            } else {
                alert('Something went wrong!');
                console.error('Error sending message:', response.statusText);
                // Handle error, such as displaying an error message to the user
            }
        } catch (error) {
            console.error('Error sending message:', error.message);
            // Handle error, such as displaying an error message to the user
        } finally {
            setIsSending(false);
        }
    };

    const sortedFilteredSkills = user?.skills?.filter((item) => item.enabled)?.sort((a, b) => a.sequence - b.sequence);
    const sortedFilteredProject = user?.projects?.filter((item) => item.enabled)?.sort((a, b) => a.sequence - b.sequence);
    const filteredServices = user?.services?.filter((item) => item.enabled);
    const filteredTestimonials = user?.testimonials?.filter((item) => item.enabled);
    const filteredSocialHandles = user?.social_handles?.filter((item) => item.enabled);
    const filteredEducation = user?.timeline?.filter((item) => item.forEducation && item.enabled);
    const filteredExperience = user?.timeline?.filter((item) => !item.forEducation && item.enabled);

    if (isLoading) {
        return <div className="w-full h-screen bg-black flex items-center justify-center text-center">Loading..</div>;
    }
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Services />
            <Timeline />
            <Testimonial />
        </>
    );
}

export default Home;
