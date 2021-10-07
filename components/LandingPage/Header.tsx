import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    return (
        <div className="Header">
            <div className="text">
                <div className="hd-title">
                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, tempora!</h1>
                </div>
                <div className="hd-description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorem voluptatibus amet. Ducimus consectetur rerum fugit</p>
                </div>
                <div className="btns">
                    <div className="find-tenant-btn"><button>Find tenant</button></div>
                    <div className="find-flat-btn">
                        {/* eslint-disable-next-line @next/next/link-passhref */}
                        <Link href="/offers">
                            <button>Find flat</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="vector-img-container">
                <Image src="/DSC_2778.jpg" alt="Landlord Image" className="ld-img" objectFit="cover" layout="fill" />
            </div>
        </div>
    )
}
