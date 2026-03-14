import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Linkedin } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    if (!formData.name.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields.');
      setSubmitting(false);
      return;
    }

    const { error } = await supabase.from('contact_submissions').insert([
      {
        name: formData.name,
        organization: formData.organization || 'Not specified',
        message: formData.message,
      },
    ]);

    if (error) {
      setError('Failed to send message. Please try again.');
      console.error('Error submitting contact form:', error);
    } else {
      setSubmitted(true);
      setFormData({ name: '', organization: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }

    setSubmitting(false);
  };

  return (
    <section id="contact" className="relative bg-slate-50 section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="inline-block mb-8">
          <p className="text-sm font-semibold text-academic-green-500 uppercase tracking-wider">
            Get in Touch
          </p>
        </div>

        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4 leading-tight">
          Contact for Opportunities
        </h2>

        <p className="text-lg text-slate-600 mb-16 max-w-3xl">
          Interested in collaboration, PhD opportunities, research partnerships, or academic
          discussions? I'm eager to connect with recruiters, admissions committees, and fellow
          researchers.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-academic-green-500 focus:border-transparent transition-all"
                  placeholder="Full name"
                />
              </div>

              <div>
                <label
                  htmlFor="organization"
                  className="block text-sm font-semibold text-slate-900 mb-2"
                >
                  Organization / University
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-academic-green-500 focus:border-transparent transition-all"
                  placeholder="e.g., University Name or Company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-academic-green-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your opportunity or inquiry..."
                ></textarea>
              </div>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              {submitted && (
                <div className="p-4 bg-academic-green-50 border border-academic-green-200 rounded-lg flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-academic-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-academic-green-700">
                    Thank you for your message! I'll get back to you soon.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting || submitted}
                className="button-primary w-full py-3 text-base font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                {submitting ? 'Sending...' : 'Send Message'}
              </button>

              <p className="text-xs text-slate-600 text-center">
                Your message is secure and will not be shared with third parties.
              </p>
            </form>
          </div>

          <div className="md:col-span-1">
            <div className="bg-white border border-slate-200 rounded-xl p-8 sticky top-20">
              <h3 className="text-lg font-serif font-bold text-slate-900 mb-6">
                Connect Elsewhere
              </h3>

              <div className="space-y-4">
                <a
                  href="https://linkedin.com/in/prathmesh-nadarge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 border border-slate-200 rounded-lg hover:border-tech-blue-500 hover:bg-tech-blue-50 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-tech-blue-600" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">LinkedIn</p>
                    <p className="text-xs text-slate-600">Professional profile</p>
                  </div>
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200">
                <h4 className="text-sm font-semibold text-slate-900 mb-3">
                  Response Time
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  I typically respond to inquiries within 2-3 business days. For urgent matters,
                  please mention it in your message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
