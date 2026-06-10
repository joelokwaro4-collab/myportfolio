
function Contact() {
    return (
        <>
            <section className=" flex justify-center items-center bg-[#826afb] min-h-[70vh]">


                <form className="mx-w-[600px] w-[30%] bg-white pt-[25px] px-[25px] pb-[30px] rounded-[8px] shadow-[0_0_10px_rgba(0,0,0,1)] text-[#333] m-[25px]">
                    <h1 className="text-center text-2xl">Conntact Form</h1>
                    <div>
                        <label htmlFor="">Full Name</label>
                        <input className="w-[100%] h-[50px] bg-transparent border-2 border-[#ddd] outline-none rounded-[6px] p-[15px] text-[16px] mt-[8px]  " type="text" placeholder="Enter your Name" required />
                    </div>
                    <div>
                        <label htmlFor="">Email Address</label>
                        <input className="w-[100%] h-[50px] bg-transparent border-2 border-[#ddd] outline-none rounded-[6px] p-[15px] text-[16px] mt-[8px]  " type="email" placeholder="Enter Your Email" required />
                    </div>
                    <div>
                        <label htmlFor="">Your Messsage</label>
                        <textarea name="" id="" className="w-[100%] h-[50px] bg-transparent border-2 border-[#ddd] outline-none rounded-[6px] p-[15px] text-[16px] mt-[8px] " placeholder="Enter Your Message"></textarea>
                    </div>
                </form>
            </section>

            <section className=" flex justify-center items-cennter min-h-[60vh] bg-white/10">
                <form className=" mx-w-[650px] w-[40%] bg-white/100 pb[30px] shadow-[5px_5px_10px_[blue] " action="">
                    <div>
                        <label  htmlFor=""></label>
                        <input type="text" className="" placeholder="" required />
                    </div>
                     <div>
                        <label  htmlFor=""></label>
                        <input type="text" className="" placeholder="" required />
                    </div>
                    <div>
                        <label htmlFor="">Your Message</label>
                        <textarea name="" id="" className="" placeholder="Write  your Message"></textarea>
                    </div>
                </form>


            </section>
        </>
    );
}

export default Contact;