import React,{ useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import { addproduct, getCategorys, getStatus } from '../Services/Actions/product';

const AddProduct = () => {
    const { register, setValue, handleSubmit, formState: { errors } } = useForm();
    const [categories, setCategories] = useState([]);
    const [status, setStatus] = useState([]);
    const maxFiles = 5;

    const imageValidator = (value) => {
        return value.length > maxFiles
        ? `You can only upload up to ${maxFiles} images`
        : true;
    };

    const [selectedImages, setSelectedImages] = useState([]);

    const handleImageChange = (event) => {
        const files = event.target.files;
        const newSelectedImages = [];
    
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const objectUrl = URL.createObjectURL(file);
          newSelectedImages.push({ file, objectUrl });
        }
    
        setSelectedImages((prevSelectedImages) =>
          prevSelectedImages.concat(newSelectedImages)
        );
    };
      const handleImageRemove = (index) => {
        const imagesCopy = [...selectedImages];
        imagesCopy.splice(index, 1);
        setSelectedImages(imagesCopy);
        // const updatedFormData = new FormData();
        setValue('image', imagesCopy);
        // reset({
        //     ...watchedInputs,
        //     image: imagesCopy
        // });      
      };
      
    // const handleImageRemove = (index) => {
    //     const updatedImages = selectedImages.filter((_, i) => i !== index);
    //     console.log(updatedImages);
    //     setSelectedImages(updatedImages);
      
    //     const updatedFormData = { ...watch() };
    //     setValue("image", updatedImages);

    //   };
    
    useEffect(() => {
        const fetchCategories = async () => {
          try {
            const data = await getCategorys();
            setCategories(data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchCategories();
        const fetchStatus = async () => {
            try {
              const data = await getStatus();
              setStatus(data);
            } catch (error) {
              console.error(error);
            }
          };
          fetchStatus();
      }, []);


    const onSubmit = data => {
        const formData = new FormData();
        console.log(data);
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('price', data.price);
        formData.append('status', data.status);
        formData.append('category', data.category);
        for (let i = 0; i < data.image.length; i++)
            formData.append(`picture${i + 1}`, data.image[i]);
        console.log(formData);
        addproduct(formData);

    };

    return (
        <>
            <div className="breadcrumb-bar">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-12">
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Add Product</li>
                                </ol>
                            </nav>
                            <h2 className="breadcrumb-title">Add Product</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-8 col-xl20 col-md-12 dependent">
                            <h2 className="text-center mb-4">Send Request To Add Product In Auction</h2>
                            <div className="card">
                                <div className="card-body">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row form-row">

                                            <div className="row form-row">
                                                <div className="col-12 col-md-12">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Name</label>
                                                        <input
                                                                type="text"
                                                                name="name"
                                                                className="form-control floating"
                                                                {...register('name', {
                                                                required: 'Name is required',
                                                                })}
                                                                aria-invalid={errors && errors.name ? "true" : "false"}
                                                            />
                                                            { errors.name && (
                                                                <span className="text-danger">{errors.name.message}</span>
                                                            )}
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="description">Description</label>
                                                        <textarea
                                                            className="form-control"
                                                            {...register('description', {
                                                                required: 'Description is required',
                                                                })}
                                                                aria-invalid={errors && errors.description ? "true" : "false"}
                                                            />
                                                            { errors.description && (
                                                                <span className="text-danger">{errors.description.message}</span>
                                                            )}
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="price">Price</label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            {...register('price', {
                                                                required: 'price is required',
                                                                })}
                                                                aria-invalid={errors && errors.price ? "true" : "false"}
                                                            />
                                                            { errors.price && (
                                                                <span className="text-danger">{errors.price.message}</span>
                                                            )}
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-12">
                                                    <div className="form-group">
                                                        <label htmlFor="status">Status</label>
                                                        <select
                                                            className="form-control select"
                                                            {...register('status', {
                                                                required: 'status is required',
                                                                })}
                                                                aria-invalid={errors && errors.status ? "true" : "false"}
                                                            
                                                        >
                                                            <option value="">--Please select--</option>
                                                            {status.map((stat) => (
                                                            <option key={stat.id} value={stat.id}>
                                                                {stat.name}
                                                            </option>
                                                            ))}
                                                        </select>
                                                        { errors.status && (
                                                                <span className="text-danger">{errors.status.message}</span>
                                                        )} 
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-12">
                                                    <div className="form-group">
                                                        <label htmlFor="relationship">Category</label>
                                                        <select
                                                            className="form-control select"
                                                            {...register('category', {
                                                                required: 'category is required',
                                                                })}
                                                                aria-invalid={errors && errors.category ? "true" : "false"}
                                                            
                                                        >
                                                            <option value="">--Please select--</option>
                                                            {categories.map((category) => (
                                                            <option key={category.id} value={category.id}>
                                                                {category.name}
                                                            </option>
                                                            ))}
                                                        </select>
                                                        { errors.category && (
                                                                <span className="text-danger">{errors.category.message}</span>
                                                        )} 
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <div className="upload-img">
                                                            <div className="change-photo-btn">
                                                                <span>
                                                                <i className="fa fa-upload"></i> Upload Photo
                                                                </span>
                                                                <input
                                                                    type="file"
                                                                    accept="image/*"
                                                                    className="upload"
                                                                    multiple
                                                                    {...register('image', {
                                                                        required: 'Image is required',
                                                                        validate: imageValidator,
                                                                    })}
                                                                    aria-invalid={errors && errors.image ? 'true' : 'false'}
                                                                    onChange={handleImageChange}
                                                                />
                                                            </div>
                                                            {errors.image && (
                                                                <span className="row justify-content-center align-items-center text-danger">
                                                                {errors.image.message}
                                                                </span>
                                                            )}
                                                            {selectedImages.length > 0 && (
                                                                <div className="row">
                                                                    {selectedImages.map((image, index) => (
                                                                        <div className="col-12 col-md-6 col-lg-4 d-flex" key={index}>
                                                                        <div className="alert-dismissible fade show mb-0">
                                                                            <div className="card-body">
                                                                            <img
                                                                                src={image.objectUrl}
                                                                                alt={`Preview ${index + 1}`}
                                                                                className="card-img-top"
                                                                            />
                                                                            <button
                                                                                type="button"
                                                                                className="close"
                                                                                aria-label="Close"
                                                                                onClick={() => handleImageRemove(index)}
                                                                            >
                                                                                <span aria-hidden="true">×</span>
                                                                            </button>
                                                                            </div>
                                                                        </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>

                                                </div> 
                                            </div>
                                            </div>
                                        </div>
                                        <div className="submit-section">
                                            <button type="submit" className="btn btn-primary submit-btn ">Send</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddProduct;
