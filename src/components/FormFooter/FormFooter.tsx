import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormFooter = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Trường này là bắt buộc!'),
            email: Yup.string()
                .required('Trường này là bắt buộc!')
                // eslint-disable-next-line no-useless-escape
                .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email không hợp lệ!'),
            message: Yup.string(),
        }),
        onSubmit: (values) => {
            console.log({ values });
        },
    });

    return (
        <form action="" className="mt-[10px]" onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-[10px] gap-y-[20px]">
                <div className="col-span-1">
                    <input
                        type="text"
                        className="border-2 outline-none border-white bg-primary rounded-[8px] py-[8px] px-[10px] w-full"
                        name="name"
                        id="name"
                        value={formik.values.name}
                        required
                        placeholder="Name"
                        onChange={formik.handleChange}
                        spellCheck={false}
                    />
                </div>
                <div className="col-span-1">
                    <input
                        className="border-2 outline-none border-white bg-primary rounded-[8px] py-[8px] px-[10px] w-full"
                        type="email"
                        name="email"
                        id="email"
                        value={formik.values.email}
                        required
                        onChange={formik.handleChange}
                        placeholder="Email"
                        spellCheck={false}
                    />
                </div>
            </div>
            <textarea
                id="message"
                spellCheck={false}
                name="message"
                placeholder="Message"
                value={formik.values.message}
                onChange={formik.handleChange}
                className="resize-y w-full border-2 outline-none border-white bg-primary rounded-[8px] py-[8px] px-[8px] mt-[20px]"
            ></textarea>
            <button
                type="submit"
                value="Send"
                className="hover:bg-white bg-cyan-200  block rounded-[8px] py-[4px] px-[14px] uppercase border-2 border-transparent font-medium text-primary mt-[10px] float-right"
            >
                Send
            </button>
        </form>
    );
};

export default FormFooter;
