// client/src/pages/Contact.tsx
export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-3">
        Have suggestions or found an issue? Feel free to contact us!
      </p>
      <ul className="list-disc ml-5">
        <li>Email: <a href="mailto:nagendravadladi@gmail.com" className="text-blue-500">nagendravadladi@gmail.com</a></li>
        <li>GitHub: <a href="https://github.com/nagendravadladi" className="text-blue-500">github.com/nagendravadladi</a></li>
      </ul>
    </div>
  );
}
