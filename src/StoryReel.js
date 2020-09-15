import React from 'react'
import './StoryReel.css'
import Story from './Story'

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/132320678/original/91a7f904a1701648a6f15b1cf8462ac310ebe65f/create-a-beuatiful-landing-page-design.png"
                profileSrc="https://mir-s3-cdn-cf.behance.net/user/276/f4bc46412893301.5e1a0d63b9b8f.jpg"
                title="Rasel Hossain"
            />

            <Story
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMERUlHjj7kzr9VGhtE2Jpi2PzsDiAcstalA&usqp=CAU"
                profileSrc="https://avatars2.githubusercontent.com/u/45650531?s=460&u=0197d08ad924c260a9e898b0daf4161b2bb378ab&v=4"
                title="Yeasin Hossain"
            />

            <Story
                image="https://invarianttele.com/assets/img/about_image.png"
                profileSrc="https://media-exp1.licdn.com/dms/image/C5603AQEa7b-KtSVkbQ/profile-displayphoto-shrink_200_200/0?e=1601510400&v=beta&t=zN9iZBDKSLgLut9Ah8c9tPasHzxhRai6X021e-EYb9E"
                title="Ismail Hossein"
            />

            <Story
                image="https://bdraseltech.com/images/5.jpeg"
                profileSrc="https://pbs.twimg.com/profile_images/1106079455997358080/Gm-llNvI.png"
                title="Tabib Khan"
            />

            <Story
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1tpkY_MdQFvKNNdGYqJ3aPM0siHraEkimLA&usqp=CAU"
                profileSrc="https://pbs.twimg.com/profile_images/1106079455997358080/Gm-llNvI.png"
                title="Tabib Khan"
            />
        </div>
    )
}

export default StoryReel
