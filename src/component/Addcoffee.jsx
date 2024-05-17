const Addcoffee = () => {
  const handelAddCoffee = e =>{
    e.preventDefault()
    const form = event.target 
    const name = form.name.value
    const quantity = form.quantity.value
    const supplier = form.supplier.value
    const taste = form.taste.value
    const details = form.details.value
    const category = form.category.value
    const photo = form.photo.value

    const newCoffee = {name,quantity,supplier,taste,details,category,photo}
    console.log(newCoffee)

  }
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-bold">Add Coffee</h2>
      <form onSubmit={handelAddCoffee}>
        {/* form row */}
        <div className="md:flex gap-8">
          <div className="md:w-1/2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Coffee Name</span>
              </div>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="md:w-1/2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Available Quantity</span>
              </div>
              <input
                type="text"
                placeholder="Quantity"
                name="quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form Supplier row */}
        <div className="md:flex gap-8">
          <div className="md:w-1/2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Supplier</span>
              </div>
              <input
                type="text"
                placeholder="Enter coffee supplier"
                name="supplier"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="md:w-1/2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Taste</span>
              </div>
              <input
                type="text"
                placeholder="Taste"
                name="taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form Category row */}
        <div className="md:flex gap-8">
          <div className="md:w-1/2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <input
                type="text"
                placeholder="Enter coffee category"
                name="category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="md:w-1/2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Details</span>
              </div>
              <input
                type="text"
                placeholder="Enter coffee details"
                name="details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="w-full block">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Photo</span>
            </div>
            <input
              type="text"
              placeholder="Enter photo URL"
              name="photo"
              className="input input-bordered w-full"
            />
          </label>
        </div>
      
        <input type="submit" value="Add Coffee" className="btn btn-active btn-ghost w-full mt-8" />
      </form>
    </div>
  );
};

export default Addcoffee;
