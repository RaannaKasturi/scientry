import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <section className="w-full text-secondary-foreground bg-secondary overflow-x-hidden pt-10 pb-10 justify-center md:px-40 px-10">
            <h1 className="pt-10 text-center text-4xl md:text-6xl decoration-solid decoration-2 underline underline-offset-8">Privacy Policy</h1>
            <p className="py-2 text-center"><em>This privacy policy is effective as of 2025-02-26</em></p>
            <p className="pt-5 pb-5">This privacy policy is applicable to the Scientry app (hereinafter referred to as &quot;Application&quot;) for mobile devices, which was developed by Binary Biology (hereinafter referred to as &quot;Service Provider&quot;) as a an Ad Supported Freemium service. This service is provided &quot;AS IS&quot;.</p>
            <div className="border-gray-700 border-b-2"></div>
            <h2 className="text-2xl md:text-4xl py-5">What information does the Application obtain and how is it used?</h2>
            <ul className="list-disc pl-5 space-y-3">
                <li className="list-item">
                    <h3 className="text-xl md:text-2xl">User Provided Information</h3>
                    <p >The Application acquires the information you supply when you download and register the Application. Registration with the Service Provider is not mandatory. However, bear in mind that you might not be able to utilize some of the features offered by the Application unless you register with them. <br />
                        The Service Provider may also use the information you provided them to contact you from time to time to provide you with important information, required notices and marketing promotions.</p>
                </li >
                <li className="list-item">
                    <h3 className="text-xl md:text-2xl">Automatically Collected Information</h3>
                    <p>In addition, the Application may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile devices unique device ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browsers you use, and information about the way you use the Application.</p>
                </li>
                <li className="list-item">
                    <h3 className="text-xl md:text-2xl">Does the Application collect precise real time location information of the device?</h3>
                    <p>This Application does not gather precise information about the location of your mobile device.</p>
                </li>
                <li className="list-item">
                    <h3 className="text-xl md:text-2xl">Do third parties see and/or have access to information obtained by the Application?</h3>
                    <p>Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.</p>
                    <br />
                    <p>Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:</p>
                    <ul className="list-disc pl-10">
                        <li className="list-item"><Link className="underline underline-offset-4" href={'https://www.google.com/policies/privacy'} target={'_blank'} rel={'noreferrer noopener'}>Google Play Services</Link></li>
                        <li className="list-item"><Link className="underline underline-offset-4" href={'https://support.google.com/admob/answer/6128543?hl=en'} target={'_blank'} rel={'noreferrer noopener'}>AdMob</Link></li>
                        <li className="list-item"><Link className="underline underline-offset-4" href={'https://firebase.google.com/support/privacy'} target={'_blank'} rel={'noreferrer noopener'}>Google Analytics for Firebase</Link></li>
                        <li className="list-item"><Link className="underline underline-offset-4" href={'https://firebase.google.com/support/privacy'} target={'_blank'} rel={'noreferrer noopener'}>Firebase Crashlytics</Link></li>
                    </ul>
                    <br />
                    <p>The Service Provider may disclose User Provided and Automatically Collected Information:</p>
                    <ul className="list-disc pl-10">
                        <li className="list-item">as required by law, such as to comply with a subpoena, or similar legal process;</li>
                        <li className="list-item">when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
                        <li className="list-item">with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>
                    </ul>
                </li>
                <li className="list-item">
                    <h3 className="text-xl md:text-2xl">What are my opt-out rights?</h3>
                    <p>You can halt all collection of information by the Application easily by uninstalling the Application and deleting your account. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.</p>
                </li>
                <li className="list-item">
                    <h3 className="text-xl md:text-2xl">Data Retention Policy, Managing Your Information</h3>
                    <p>The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. The Service Provider will retain Automatically Collected information for up to 24 months and thereafter may store it in aggregate. If you&apos;d like the Service Provider to delete User Provided Data that you have provided via the Application, please contact them at <Link className="underline underline-offset-4" href={'mailto:scientry@binarybiology.top'} target={'_blank'} rel={'noreferrer noopener'}>scientry@binarybiology.top</Link> and we will respond in a reasonable time. Please note that some or all of the User Provided Data may be required in order for the Application to function properly.</p>
                </li>
                <li className="list-item">
                    <h3 className="text-xl md:text-2xl">Children</h3>
                    <p>The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.</p>
                    <p>The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. In the case the Service Provider discover that a child under 13 has provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact the Service Provider (<Link className="underline underline-offset-4" href={'mailto:scientry@binarybiology.top'} target={'_blank'} rel={'noreferrer noopener'}>scientry@binarybiology.top</Link>) so that they will be able to take the necessary actions.</p>
                </li>
                <li className="list-item">
                    <h3 className="text-xl md:text-2xl">Security</h3>
                    <p>The Service Provider are concerned about safeguarding the confidentiality of your information. The Service Provider provide physical, electronic, and procedural safeguards to protect information we process and maintain. For example, we limit access to this information to authorized employees and contractors who need to know that information in order to operate, develop or improve their Application. Please be aware that, although we endeavor provide reasonable security for information we process and maintain, no security system can prevent all potential security breaches.</p>
                </li>
                <li className="list-item">
                    <h3 className="text-xl md:text-2xl">Changes</h3>
                    <p>This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.</p>
                </li>
                <li className="list-item">
                    <h3 className="text-xl md:text-2xl">Your Consent</h3>
                    <p>By using the Application, you are giving your consent to the Service Provider processing of your information as set forth in this Privacy Policy now and as amended by us. &quot;Processing,&quot; means using cookies on a computer/hand held device or using or touching information in any way, including, but not limited to, collecting, storing, deleting, using, combining and disclosing information.</p>
                </li>
                <li className="list-item">
                    <h3 className="text-xl md:text-2xl">Contact us</h3>
                    <p>If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at <Link className="underline underline-offset-4" href={'mailto:scientry@binarybiology.top'} target={'_blank'} rel={'noreferrer noopener'}>scientry@binarybiology.top</Link>.</p>
                </li>
            </ul>
        </section>
    )
}