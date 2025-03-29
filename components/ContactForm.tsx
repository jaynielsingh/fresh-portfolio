
const ContactForm = () => {
  return (
    <div>
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
              <div>
                <h2 className="text-pretty text-4xl font-semibold tracking-tight ">
                  Get in touch
                </h2>
                <p className="mt-4 text-base/7 ">
                  Love To Hear From You.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                <div className="rounded-2xl bg-accent  p-10">
                  <h3 className="text-base/7 font-semibold ">
                    Jayniel Singh
                  </h3>
                  <dl className="mt-3 space-y-1 text-sm/6 ">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a
                          href="mailto:singh@jayniel.com"
                          className="font-semibold text-white"
                        >
                          singh@jayniel.com
                        </a>
                      </dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <a href="tel:+15104158251">
                        <dd>+1 (510) 415 8251</dd>
                      </a>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base/7 font-semibold text-gray-900">
                    Ignis Byte - Web Design Agency
                  </h3>
                  <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a
                          href="mailto:suppoprt@ignisbyte.com"
                          className="font-semibold text-accent"
                        >
                          suppoprt@ignisbyte.com
                        </a>
                      </dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <a href="tel:+15104158251">
                        <dd>+1 (510) 415 8251</dd>
                      </a>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
