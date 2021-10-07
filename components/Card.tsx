/* eslint-disable @next/next/link-passhref */
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link'

export default function Card() {

    const offter = {
        title: "offer title",
        description: "offer description",
        price: "155,000",
        currency: "Huf",
        allIncluded: true,
        datePosted: "12 august 2021",
        facilities: {
            fridge: true,
            AC: true,
            washing_machine: true,
            wifi: true,
            gas_heating: true,
            dryer: true,
            tv: true,
            oven: true,
            stove: true,
            dishwasher: true,
            microwave: true,
            fan: true
        }
    }



    return (
        <div className="Card">
            <div className="offer-images">
                <div className="btns">

                    <div className="carousel-btn prev-btn"><button>P</button></div>
                    <div className="carousel-btn next-btn"><button>N</button></div>
                </div>
                <div className="carousel">

                    <Image src="/DSC_2778.jpg" alt="Offer Image" className="of-img" objectFit="cover" layout="fill" />   <Image src="/DSC_2778.jpg" alt="Offer Image" className="of-img" objectFit="cover" layout="fill" />   <Image src="/DSC_2778.jpg" alt="Offer Image" className="of-img" objectFit="cover" layout="fill" />
                </div>
            </div>
            <div className="offer-details">
                <div className="offer-title">
                    <p>{offter.title} name ,{offter.title} name,{offter.title} name</p>
                </div>
                <div className="price-rank">
                    <div className="price-info">
                        <h2>{`${offter.price} ${offter.currency}`} / month</h2>
                        <p>all included</p>
                    </div>
                    <div className="offer-ranking">
                        <p>38</p>
                        <FontAwesomeIcon icon={faArrowUp} color="#5b5f97" />
                    </div>
                </div>
                <div className="line"></div>
                <div className="landlord-facilities">
                    <div className="landlord">
                        <div className="landlord-img">
                            <Image src="/DSC_2778.jpg" alt="Landlord Image" className="ld-img" objectFit="cover" layout="fill" />
                        </div>
                        <div className="landlord-name"><p>Abdulla Jaber</p></div>
                    </div>
                    <div className="facilities">
                        <div className="facilitie">
                            <div className="icon">
                                <FontAwesomeIcon icon={faCheckCircle} color="#5b5f97" />
                            </div>
                            <div className="title"><p>TV</p></div>
                        </div>
                        <div className="facilitie">
                            <div className="icon">
                                <FontAwesomeIcon icon={faCheckCircle} color="#5b5f97" />
                            </div>
                            <div className="title"><p>TV</p></div>
                        </div>
                        <div className="facilitie">
                            <div className="icon">
                                <FontAwesomeIcon icon={faCheckCircle} color="#5b5f97" />
                            </div>
                            <div className="title"><p>TV</p></div>
                        </div>
                        <div className="facilitie">
                            <div className="icon">
                                <FontAwesomeIcon icon={faCheckCircle} color="#5b5f97" />
                            </div>
                            <div className="title"><p>TV</p></div>
                        </div>
                    </div>
                </div>
                <div className="datePosted-goToOfferBtn">
                    <div className="date-posted">
                        <p>{offter.datePosted}</p>
                    </div>
                    <div className="go-to-offer-btn">
                        <Link href="/offerDetails" >
                            <button>Check Offer</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
