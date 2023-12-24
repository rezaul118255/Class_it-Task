

const Add = () => {
    const handleBookService = event => {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value;
        const color = form.color.value;
        const size = form.size.value;
        const image = form.image.value;

        const booking = {
            title: title,
            color: color,
            size: size,
            image: image,

        }

        console.log(booking);

        fetch('https://classic-it-server-nu.vercel.app/Product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('service book successfully')
                }
            })

    }




    return (
        <div>
            <form onSubmit={handleBookService}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">title</span>
                        </label>
                        <input type="text" name="title" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Color</span>
                        </label>
                        <input type="text" name="color" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">size</span>
                        </label>
                        <input type="text" name="size" placeholder="size" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" name="image" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Add to mongodb" />
                </div>
            </form>

        </div>
    );
};

export default Add;