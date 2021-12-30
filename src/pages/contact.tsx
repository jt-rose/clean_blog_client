import { Header } from "../components/Header";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Navbar } from "../components/Navbar";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // when using this in a real app, submitSuccess and submitError
  // should be defined by the result of the submit query
  const [submitSuccess, updateSubmitSuccess] = useState(false);
  const submitError = false;

  const watchAllFields = watch();
  const incompleteForm = Object.values(watchAllFields).some(
    (val) => val === ""
  );

  // when using this in a real app, connect the submit function
  // to the appropriate backend request
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    updateSubmitSuccess(true);
  });

  return (
    <>
      <Header
        title="Contact Me"
        subHeading="Have questions? I have answers."
        headerIMGPath="/img/contact-bg.jpg"
      />
      <Navbar />
      <main className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <p>
                Want to get in touch? Fill out the form below to send me a
                message and I will get back to you as soon as possible!
              </p>
              <div className="my-5">
                <form id="contactForm" onSubmit={onSubmit}>
                  <div className="form-floating">
                    <input
                      className="form-control"
                      id="name"
                      type="text"
                      placeholder="Enter your name..."
                      {...register("name", { required: true })}
                    />
                    <label htmlFor="name">Name</label>
                    {errors.name && (
                      <div className="invalid-feedback d-block">
                        A name is required.
                      </div>
                    )}
                  </div>
                  <div className="form-floating">
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      placeholder="Enter your email..."
                      {...register("email", {
                        required: true,
                        pattern: /(\w|\d)+\@(\w|\d)+/,
                      })}
                    />
                    <label htmlFor="email">Email address</label>
                    {errors.email?.type === "required" && (
                      <div className="invalid-feedback d-block">
                        An email is required.
                      </div>
                    )}
                    {errors.email?.type === "pattern" && (
                      <div className="invalid-feedback d-block">
                        Email is not valid.
                      </div>
                    )}
                  </div>
                  <div className="form-floating">
                    <input
                      className="form-control"
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number..."
                      {...register("phone", {
                        required: true,
                        pattern:
                          /\d{3}(\s|\-|\.)?\d{3}(\s|\-|\.)?\d{4}(\s|\-|\.)?/,
                      })}
                    />
                    <label htmlFor="phone">Phone Number</label>
                    {errors.phone?.type === "required" && (
                      <div className="invalid-feedback d-block">
                        A phone number is required.
                      </div>
                    )}
                    {errors.phone?.type === "pattern" && (
                      <div className="invalid-feedback d-block">
                        Phone number is not valid.
                      </div>
                    )}
                  </div>
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      id="message"
                      placeholder="Enter your message here..."
                      style={{ height: "12rem" }}
                      {...register("message", { required: true })}
                    />
                    <label htmlFor="message">Message</label>
                    {errors.message && (
                      <div className="invalid-feedback d-block">
                        A message is required.
                      </div>
                    )}
                  </div>
                  <br />
                  {
                    /*<!-- Submit success message-->*/
                    submitSuccess && (
                      <div id="submitSuccessMessage">
                        <div className="text-center mb-3">
                          <div className="fw-bolder">
                            Form submission successful!
                          </div>
                        </div>
                      </div>
                    )
                  }

                  {
                    /*<!-- Submit error message-->*/
                    submitError && (
                      <div className="d-none" id="submitErrorMessage">
                        <div className="text-center text-danger mb-3">
                          Error sending message!
                        </div>
                      </div>
                    )
                  }
                  <button
                    className="btn btn-primary text-uppercase"
                    id="submitButton"
                    type="submit"
                    disabled={incompleteForm}
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
