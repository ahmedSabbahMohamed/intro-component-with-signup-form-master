import { useFormik } from "formik";
import * as Yup from "yup";

function App() {
    //logic form
    const formik = useFormik({
        initialValues: {
            fname: "",
            lname: "",
            email: "",
            password: "",
        },
        //validation
        validationSchema: Yup.object({
            fname: Yup.string().max(15, "First name must be 15 charcters or less").required("First name is required"),
            lname: Yup.string().max(15, "Last name must be 15 charcters or less").required("Last name is required"),
            email: Yup.string().email("Invalid email address").required("Email is required"),
            password: Yup.string().min(8, "Password can't be less than 8 characters").required("Passwork required"),
        }),
        //submit
        onSubmit: (values) => {
            console.log(values);
        },
    });
    return(
        <>
            <main className="grid grid-cols-1 items-center gap-8 max-w-4xl m-5 lg:grid-cols-2">
                <div className="text-center lg:text-left">
                    <h1 className="text-white text-5xl font-bold">Learn to code by watching others</h1>
                    <p className="text-gblue text-lg mt-7">
                        See how experienced developers solve problems in real-time.
                        watching scripted tutorial is great. but understanding how
                        developers is invaluable.
                    </p>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="bg-Blue rounded-lg p-4 border-b-4 border-gblue text-center">
                        <span className="inline-block text-white font-medium">Try it free 7 days</span>
                        <span className="inline-block text-gblue">then $20/mo. thereafter</span>
                    </div>
                    <div className="mt-8 bg-white rounded-lg p-8 pb-4 shadow-lg">
                        {/* first name */}
                    <label
                        htmlFor="fname"
                        className={`block m-1 ${formik.touched.fname && formik.errors.fname? "text-Red":"text-Blue"}`}>
                        {formik.touched.fname && formik.errors.fname? formik.errors.fname: "First Name:"}
                    </label>
                    <div className="mb-2">
                        <input
                            type="text"
                            name="fname"
                            className="w-full rounded-lg p-2 border"
                            placeholder="Enter your first name"
                            value={formik.values.fname}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    {/* last name */}
                    <label
                        htmlFor="lname"
                        className={`block m-1 ${formik.touched.lname && formik.errors.lname? "text-Red":"text-Blue"}`}>
                        {formik.touched.lname && formik.errors.lname? formik.errors.lname: "Last Name:"}
                    </label>
                    <div className="mb-2">
                        <input
                            type="text"
                            name="lname"
                            className="w-full rounded-lg p-2 border"
                            placeholder="Enter your last name"
                            value={formik.values.lname}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    {/* email */}
                    <label
                        htmlFor="email"
                        className={`block m-1 ${formik.touched.email && formik.errors.email? "text-Red":"text-Blue"}`}>
                        {formik.touched.email && formik.errors.email? formik.errors.email: "Email:"}
                    </label>
                    <div className="mb-2">
                        <input
                            type="email"
                            name="email"
                            className="w-full rounded-lg p-2 border"
                            placeholder="Email address"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    {/* password */}
                    <label
                        htmlFor="password"
                        className={`block m-1 ${formik.touched.password && formik.errors.password? "text-Red":"text-Blue"}`}>
                        {formik.touched.email && formik.errors.password? formik.errors.password: "Password:"}
                    </label>
                    <div className="mb-2">
                        <input
                            type="password"
                            name="password"
                            className="w-full rounded-lg p-2 border"
                            placeholder="Password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-Green p-4 rounded-md uppercase text-white font-medium mt-2 hover:opacity-70"
                    >
                        claim your free trial
                    </button>
                    <p className="text-gblue p-2 mt-2 text-center text-sm">
                        By clicking the button, you are agreeing to our
                        <a className="inline-block text-Red cursor-pointer">Terms and Services</a>
                    </p>
                    </div>
                </form>
            </main>
        </>
    );
}

export default App;
