import React from "react";
import sendIcon from "../assets/icons/send.png";
import chevronRightIcon from "../assets/icons/chavronRight.png";
import ceoImg from "../assets/images/ceo.png";
import directorImg from "../assets/images/director.png";
import designerImg from "../assets/images/designer.png";

const QuickTransferCard = () => {
    return (
        <div
            style={{
                width: "20rem",
                padding: "1rem",
                borderRadius: "15px",
                backgroundColor: "var(--headerNav)",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                fontFamily: "Arial, sans-serif",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "20px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        flex: 1,
                    }}
                >
                    <div style={{ textAlign: "center" }}>
                        <div
                            style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "50%",
                                overflow: "hidden",
                                margin: "0 auto",
                            }}
                        >
                            <img
                                src={ceoImg}
                                alt="Livia Bator"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </div>
                        <div
                            style={{
                                fontSize: "14px",
                                fontWeight: "bold",
                                color: "#333",
                                marginTop: "10px",
                            }}
                        >
                            Livia Bator
                        </div>
                        <div style={{ fontSize: "12px", color: "#666" }}>CEO</div>
                    </div>

                    <div style={{ textAlign: "center" }}>
                        <div
                            style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "50%",
                                overflow: "hidden",
                                margin: "0 auto",
                            }}
                        >
                            <img
                                src={directorImg}
                                alt="Randy Press"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </div>
                        <div
                            style={{
                                fontSize: "14px",
                                fontWeight: "bold",
                                color: "#333",
                                marginTop: "10px",
                            }}
                        >
                            Randy Press
                        </div>
                        <div style={{ fontSize: "12px", color: "#666" }}>Director</div>
                    </div>

]                    <div style={{ textAlign: "center" }}>
                        <div
                            style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "50%",
                                overflow: "hidden",
                                margin: "0 auto",
                            }}
                        >
                            <img
                                src={designerImg}
                                alt="Workman"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </div>
                        <div
                            style={{
                                fontSize: "14px",
                                fontWeight: "bold",
                                color: "#333",
                                marginTop: "10px",
                            }}
                        >
                            Workman
                        </div>
                        <div style={{ fontSize: "12px", color: "#666" }}>Designer</div>
                    </div>
                </div>

                <button
                    style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "var(--headerNav)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "none",
                        marginLeft: "10px",
                        cursor: "pointer",
                    }}
                >
                    <img
                        src={chevronRightIcon}
                        alt="Chevron Right"
                        style={{ 
                            width: "1rem", 
                            height: "0.9rem",  
                            padding: "1rem",                       
                            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                            borderRadius: "50%",
                        }}
                    />
                </button>
            </div>

            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
            }}>
                <div
                    style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: 'var(--text)',
                        marginBottom: "8px",

                    }}
                >
                    Write Amount
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "var(--sendBg)",
                        borderRadius: "25px",
                        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                        padding: "0.1rem 0 0.1rem 0.5rem",
                        marginLeft: "1rem",
                        width: "13rem",
                    }}
                >
                    <input
                        type="text"
                        placeholder="525.50"
                        
                        style={{
                            flex: 1,
                            border: "none",
                            outline: "none",
                            fontSize: "16px",
                            color: "#333",
                            backgroundColor: "transparent",
                            width: "100%",
                        }}
                    />
                    <button
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#000",
                            color: "#fff",
                            border: "none",
                            borderRadius: "2rem",
                            width: "5rem",
                            height: "40px",
                            cursor: "pointer",
                        }}
                    >
                        Send
                        <img
                            src={sendIcon}
                            alt="Send Icon"
                            style={{
                                width: "1.3rem",
                                height: "1.3rem",
                                marginLeft: "0.5rem",
                            }}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuickTransferCard;
