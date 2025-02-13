const Contact = () => {
    return (
        <section className="py-16 px-4">
            <h2 className="text-3xl font-bold text-center mb-6">Contact us</h2>
            <form className="max-w-lg mx-auto space-y-4">
                <input className="w-full p-3 border rounded" type="text" placeholder="Name" />
                <input className="w-full p-3 border rounded" type="email" placeholder="Email" />
                <textarea className="w-full p-3 border rounded" placeholder="Content"></textarea>
                <button className="w-full bg-green-600 text-white p-3 rounded">Submit</button>
            </form>
        </section>
    );
};

export default Contact;
