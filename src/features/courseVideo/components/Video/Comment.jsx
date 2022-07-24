// import { Button } from 'react-bootstrap';
import React from 'react';
import { IconChat, IconLike, IconThreeDots } from '../../icon/IconComment';
import styles from './style.module.scss';
import classNames from 'classnames/bind';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ListItemIcon, ListItemText } from '@mui/material';
const cx = classNames.bind(styles);
function Comment(props) {
    const { lesson } = props;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className={cx("comment-container")}>
            <textarea
                className="form-control bg-greylight 
                    h100
                " rows="5" placeholder="Write your message..."
            ></textarea>
            <div className={cx("comment-btn")}>
                <Button>GỬI</Button>
            </div>
            <div className={cx("comment-title")}>
                <span className={cx("title")}>Bình luận của học sinh</span>
                <span>{`(${lesson?.createdBy?.commentCount} câu trả lời)`}</span>
            </div>

            <ul className={`${cx("box-comment")} scrollbar`}>

                <li className={cx("item-comment")}>
                    <div className={cx("item-img")} >
                        <img
                            src="assets/images/user.png"
                            alt="user"
                        />
                    </div>
                    <div className={cx("item-text")}>
                        <p className={cx("text-name")} >suhdnasjkbhcm, scs</p>
                        <p className={cx("text-time")}  >26/7/2022</p>
                        <span className={cx("text-message")}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Atque, totam temporibus nostrum nobis minus,
                            sed eum, sit est ut optio quia reprehenderit.
                            A ex pariatur eos sequi nemo soluta iure.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Atque, totam temporibus nostrum nobis minus,
                            sed eum, sit est ut optio quia reprehenderit.
                            A ex pariatur eos sequi nemo soluta iure.
                        </span>
                        <div className={cx("action")}>
                            <div>
                                <IconLike />
                                <span>
                                    Huu ich
                                </span>
                            </div>
                            <div>
                                <IconChat />
                                <span>
                                    Thao luan
                                </span>
                            </div>
                        </div>
                    </div>

                    <IconThreeDots className={cx("item-icon")} fill="#D9D9D9" />
                </li>

                <li className={cx("item-comment")}>
                    <div className={cx("item-img")} >
                        <img
                            src="assets/images/user.png"
                            alt="user"
                        />
                    </div>
                    <div className={cx("item-text")}>
                        <p className={cx("text-name")} >suhdnasjkbhcm, scs</p>
                        <p className={cx("text-time")}  >26/7/2022</p>
                        <span className={cx("text-message")}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Atque, totam temporibus nostrum nobis minus,
                            sed eum, sit est ut optio quia reprehenderit.
                            A ex pariatur eos sequi nemo soluta iure.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Atque, totam temporibus nostrum nobis minus,
                            sed eum, sit est ut optio quia reprehenderit.
                            A ex pariatur eos sequi nemo soluta iure.
                        </span>
                        <div className={cx("action")}>
                            <div>
                                <IconLike />
                                <span>
                                    Huu ich
                                </span>
                            </div>
                            <div>
                                <IconChat />
                                <span>
                                    Thao luan
                                </span>
                            </div>
                        </div>
                    </div>

                    <IconThreeDots className={cx("item-icon")} fill="#D9D9D9" />
                </li>

                <li className={cx("item-comment")}>
                    <div className={cx("item-img")} >
                        <img
                            src="assets/images/user.png"
                            alt="user"
                        />
                    </div>
                    <div className={cx("item-text")}>
                        <p className={cx("text-name")} >suhdnasjkbhcm, scs</p>
                        <p className={cx("text-time")}  >26/7/2022</p>
                        <span className={cx("text-message")}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Atque, totam temporibus nostrum nobis minus,
                            sed eum, sit est ut optio quia reprehenderit.
                            A ex pariatur eos sequi nemo soluta iure.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Atque, totam temporibus nostrum nobis minus,
                            sed eum, sit est ut optio quia reprehenderit.
                            A ex pariatur eos sequi nemo soluta iure.
                        </span>
                        <div className={cx("action")}>
                            <div>
                                <IconLike />
                                <span>
                                    Huu ich
                                </span>
                            </div>
                            <div>
                                <IconChat />
                                <span>
                                    Thao luan
                                </span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <IconThreeDots className={cx("item-icon")} fill="#D9D9D9" />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                </ListItemIcon>
                                <ListItemText>Cut</ListItemText>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>Xóa</MenuItem>
                            <MenuItem onClick={handleClose}>Tùy chỉnh</MenuItem>
                        </Menu>
                    </div>

                </li>

            </ul>

        </div>
    );
}

export default Comment;