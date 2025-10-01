import React, { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';

export default function QuoteModal({ isOpen, onClose }) {
  const formRef = useRef();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [fileCount, setFileCount] = useState(0);

  useEffect(() => {
    if (isOpen) {
      if (formRef.current) formRef.current.reset();
      setFileCount(0);
      setMessage('');
      setLoading(false);
    }
  }, [isOpen]);

  const handleFileChange = (e) => {
    const selected = Array.from(e.target.files);
    if (selected.length > 6) {
      alert('You can upload up to 6 images.');
      e.target.value = ''; // Clear file input
      return;
    }
    setFileCount(selected.length);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setMessage('✅ Thank you! Your request has been submitted. We’ll get back to you within 1–2 business days.');
      formRef.current.reset();
      setFileCount(0);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setMessage(`❌ Something went wrong: ${err.text || err.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4">Request a Quote</h2>

        {message ? (
          <p className={message.includes('❌') ? 'text-red-600' : 'text-green-600'}>{message}</p>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-semibold">Name</label>
              <input type="text" name="name" required className="w-full border p-2 rounded" />
            </div>

            <div>
              <label className="block font-semibold">Email</label>
              <input type="email" name="email" required className="w-full border p-2 rounded" />
            </div>

            <div>
              <label className="block font-semibold">Phone (optional)</label>
              <input type="text" name="phone" className="w-full border p-2 rounded" />
            </div>

            <div>
              <label className="block font-semibold">Job Description</label>
              <textarea name="message" required rows="4" className="w-full border p-2 rounded" />
            </div>

            <div>
              <label className="block font-semibold">Upload Images (up to 6)</label>
              <input
                type="file"
                name="images"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="w-full"
              />
              {fileCount > 0 && (
                <p className="text-sm text-gray-500 mt-1">{fileCount} file(s) selected</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
