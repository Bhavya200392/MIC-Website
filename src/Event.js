import React from "react";

const Opcoming = [
    {
        details: "Event-1",
    }
]

export default function Event() {
    return (
        <>
        <div className="background">
            <div className="flex justify-center items-center m-10 p-10">
            <div>OnGoing Events</div>
            </div>
            <div className="container ">
                <div className="card">
                    <div className="image">
                        <img href="#" src="https://micvitc.github.io/assets/img/events/Recruitments.jpeg" />
                    </div>
                    <div className="content">
                        <h3>This is content</h3>
                        <p>DIn publishing and graphic design, Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}