import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import ThumUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutLined from '@material-ui/icons/ChatBubbleOutline'
import NearMeIcon from '@material-ui/icons/NearMe'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

function Post({ profilePic, image, message, username, timestamp }) {
    return (
        <div className="post">
            <div className="post_top">
                <Avatar
                    src={profilePic}
                    className="post_avatar"
                />
                <div className="post_topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div className="post_bottom">
               <p>{message}</p>
            </div>

            <div className="post_image">
                <img src={image} alt="" />
            </div>
            <div className="post_options">
                <div className="post_option">
                    <ThumUpIcon />
                    <p>Like</p>
                </div>

                <div className="post_option">
                    <ChatBubbleOutLined />
                    <p>Comment</p>
                </div>

                <div className="post_option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>

                <div className="post_option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlined />
                </div>
            </div>

        </div>
    )
}

export default Post
