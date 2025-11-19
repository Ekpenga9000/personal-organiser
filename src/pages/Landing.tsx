import Sidebar from "../components/SideNav"

const Landing = () => {
  return (
    <section className="flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <h2 className="text-3xl font-bold mb-4">Welcome to My Organiser</h2>
        <p className="text-lg text-gray-700">This is your landing page. Use the side navigation to explore different sections of the app.</p>
      </div>
    </section>
  )
}

export default Landing