import { useFormik } from "formik";
import * as Yup from "yup";

const AddProduct = () => {
  const baseURL = `https://66643b32932baf9032aa6cd8.mockapi.io/ListOfOrchids`;

  const formik = useFormik({
    initialValues: {
      name: "",
      rating: 0,
      isSpecial: true,
      image: "",
      color: "",
      origin: "",
      category: "",
      info: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(2, "Must be 2 characters or more"),
      rating: Yup.number()
        .required("Required")
        .min(1, "Rating must be at least 1")
        .max(5, "Rating cannot be more than 5"),
      isSpecial: Yup.boolean().required("Required"),
      image: Yup.string()
        .required("Required")
        .min(10, "Must be 10 characters or more"),
      color: Yup.string()
        .required("Required")
        .min(2, "Must be 2 characters or more"),
      origin: Yup.string()
        .required("Required")
        .min(2, "Must be 2 characters or more"),
      category: Yup.string()
        .required("Required")
        .min(2, "Must be 2 characters or more"),
      info: Yup.string()
        .required("Required")
        .min(10, "Must be 10 characters or more"),
    }),
    onSubmit: (values) => {
      fetch(baseURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          // Reset the form
          formik.resetForm();
          // Show success alert
          alert("Add Success");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  });

  return (
    <div>
      <div className="container border-2 rounded-lg">
        <h1 className="my-4 text-2xl font-bold">Add New <span className="text-[#FF8F52]"> Orchid</span></h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex">
            <div className="form-group mb-3 mr-8">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-control shadow-md "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-danger">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="form-group mb-3">
              <label htmlFor="image">Image URL</label>
              <input
                id="image"
                name="image"
                type="text"
                className="form-control shadow-md "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.image}
              />
              {formik.touched.image && formik.errors.image ? (
                <div className="text-danger">{formik.errors.image}</div>
              ) : null}
            </div>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="rating">Rating</label>
            <input
              id="rating"
              name="rating"
              type="number"
              className="form-control shadow-md w-[80px]"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.rating}
            />
            {formik.touched.rating && formik.errors.rating ? (
              <div className="text-danger">{formik.errors.rating}</div>
            ) : null}
          </div>

          <div className="form-group mb-3">
            <label className="pr-2" htmlFor="isSpecial">
              Is Special
            </label>
            <input
              id="isSpecial"
              name="isSpecial"
              type="checkbox"
              className="form-check-input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values.isSpecial}
            />
            {formik.touched.isSpecial && formik.errors.isSpecial ? (
              <div className="text-danger">{formik.errors.isSpecial}</div>
            ) : null}
          </div>
          <div className="flex">
            <div className="form-group mb-3 mr-10">
              <label htmlFor="color">Color</label>
              <input
                id="color"
                name="color"
                type="text"
                className="form-control shadow-md"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.color}
              />
              {formik.touched.color && formik.errors.color ? (
                <div className="text-danger">{formik.errors.color}</div>
              ) : null}
            </div>

            <div className="form-group mb-3 mr-10">
              <label htmlFor="origin">Origin</label>
              <input
                id="origin"
                name="origin"
                type="text"
                className="form-control shadow-md"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.origin}
              />
              {formik.touched.origin && formik.errors.origin ? (
                <div className="text-danger">{formik.errors.origin}</div>
              ) : null}
            </div>

            <div className="form-group mb-3">
              <label htmlFor="category">Category</label>
              <input
                id="category"
                name="category"
                type="text"
                className="form-control shadow-md"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.category}
              />
              {formik.touched.category && formik.errors.category ? (
                <div className="text-danger">{formik.errors.category}</div>
              ) : null}
            </div>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="info">Info</label>
            <textarea
              id="info"
              name="info"
              className="form-control shadow-md"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.info}
            />
            {formik.touched.info && formik.errors.info ? (
              <div className="text-danger">{formik.errors.info}</div>
            ) : null}
          </div>

          <button type="submit" className="btn btn-primary mb-4">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
