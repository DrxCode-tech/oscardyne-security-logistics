export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <p className="font-semibold mb-6">Last Updated: 2025</p>

      <p className="mb-8">
        We take your privacy seriously. This policy explains what information
        we collect and how we use it.
      </p>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">
            1. Information We Collect
          </h2>
          <p>
            We collect data such as name, email, phone number, and job
            application details provided by users.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            2. How We Use Your Information
          </h2>
          <p>
            Your data is used to process job applications, communicate with
            you, and improve our services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            3. Data Protection
          </h2>
          <p>
            We implement security measures to protect your information,
            though no system is 100% secure.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            4. Sharing of Information
          </h2>
          <p>
            We do not sell your data. We may share it with internal staff
            and necessary service partners.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            5. Your Rights
          </h2>
          <p>
            You may request to access, update, or delete your personal
            information at any time.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            6. Contact Us
          </h2>
          <p>
            If you have any questions, please contact us at{" "}
            <span className="font-medium">
              [insert company email]
            </span>.
          </p>
        </div>
      </section>
    </main>
  );
}
