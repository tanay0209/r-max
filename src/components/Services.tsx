function Services() {
    return (
        <div className="h-full w-full flex flex-col gap-y-10 items-center">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center">
                Empowering Service <br /> Providers Across Industries
            </h2>
            <p className="text-muted-foreground text-sm text-center w-3/4">
                Whether you're in sports, education, wellness, household services, or niche markets, our technology simplifies your business operations, making it easier for you to focus on what you do best.
            </p>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                <div className="flex w-full flex-col">
                    <img
                        className="h-48 lg:h-96 bg-center w-full rounded-md"
                        src="https://s3-alpha-sig.figma.com/img/0504/7078/30da040456770fb3f2ffd46adc51f7a7?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OMCGSNDsX51gf6imeqrZb3Irg0uq2eIYXMvrD5OZx-ZFmHtdvmD-~neS9rINr5xhmkyOYHxGJAceo1~RRXYmhjXyZAT7Qx8mTZPMbZVI2yEVzWKwpvrU4h93YUJIC9Y0zgWv6MLW8FbP16qwMP3W6ME~1Cmfw0pwT~aPgY-Rc7kEpREg0kX03M9QOe6fX6lDyYSiAPUztji9w~xuCVt1sqk78ktbWmK-Og1wrlawoMpKOVeQV1GnabbgBeyB4VUZpBqq-qCQX6-lOvOLN4a0QvEjNQK1GvlDrZV~6evSiABDd1WUIuPC4rfaogvMXfFv396Vx33bBsF6Ph1VgU8uEA__"
                        alt="Sports"
                    />
                    <div className="flex flex-col p-3">
                        <h3 className="text-xl font-semibold">Sports</h3>
                        <p className="text-sm text-muted-foreground">
                            From fitness studios to sports academies, Rmax empowers sports businesses{" "}
                            <span className="text-blue-700">Know more...</span>
                        </p>
                    </div>
                </div>

                <div className="flex w-full flex-col">
                    <img
                        className="h-48 w-full rounded-md lg:h-96 bg-center"
                        src="https://s3-alpha-sig.figma.com/img/7a4f/7c58/ae1d0dda0c303d60bf404efbc2966468?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jLts9AgTzFV390HmAUrXDwKDUd1DV77dBANQcLGVN5fqUZgNNgWL4u~dRrD85GfzpyePPVZnFjoAXLFzDHwiEBZjP0fjQlBFJ5LnuQIRXFpfaekzune15zr3mL9tw-g1XNmEm~jCf1DigXBuntMlLJdPuC5G7RJPEsdbvewjtV3Yy00pLgH0AEPU-E-kNtiPRhH-kxsOqjA87D4KpqhMJHwxeuxx5xzrn8w0PrT7cANOSCyHwVmjSmkleTlY5Gc6AQLsNUPFSjwofOliaT1FLb9RqNEsqEdIeYP85~9IlozFIFLlgh0TYBeE6Q9xUnr~0Cw9upKGbd~9Ol4D2IdrjA__"
                        alt="Sports"
                    />
                    <div className="flex flex-col p-3">
                        <h3 className="text-xl font-semibold">Healthcare & Wellness</h3>
                        <p className="text-sm text-muted-foreground">
                            Health and wellness service providers—from yoga instructors and gyms{" "}
                            <span className="text-blue-700">Know more...</span>
                        </p>
                    </div>
                </div>

                <div className="flex w-full flex-col">
                    <img
                        className="h-48 lg:h-96 w-full rounded-md bg-center"
                        src="https://s3-alpha-sig.figma.com/img/c292/0c11/2e263161ef4a45f12493203574a95e19?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KlweUKYQI4XzsBNEAbCXAaiRifcNEwXugER9IP9XSDJHDZ~8iJkYOlTu5LlssVDWuZgBFJxHGwxJ1DUBMbRDnylc8PGvFYshFa5UWmX0DxfexpMULV5ejwtHamqMplry5M0~1Ki4N-yme7bJdFBAuouu6z1WVZnIiwiPQHfBfX9fPcaXnSPwzsOUZ5eK~2QmC26idq6HOqxxjGXv5GlWHSvjpyzid880FfDjD2xnxxIzTaoMKIuEI~hZgy2VJ7Av6PdnkTBM~6nrOk2QgkZMS9kZfPIkGmJh50MYKJ-oe3CxZJ-1cm-emVIID7emDaDcuK9L4c97y4QlP~i39lf3AQ__"
                        alt="Sports"
                    />
                    <div className="flex flex-col p-3">
                        <h3 className="text-xl font-semibold">Learning Activites</h3>
                        <p className="text-sm text-muted-foreground">
                            Tutors, educators, and learning centers—from music schools to art studios{" "}
                            <span className="text-blue-700">Know more...</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
