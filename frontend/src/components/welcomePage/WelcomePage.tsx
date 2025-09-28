import React, { useState } from "react";
import { UserDTO } from "../../redux/auth/AuthModel";
import styles from './WelcomePage.module.scss';
import SearchIcon from '@mui/icons-material/Search';

interface WelcomePageProps {
    reqUser: UserDTO | null;
}

const WelcomePage = (props: WelcomePageProps) => {
    const [activeTab, setActiveTab] = useState('Friends');
    
    // Helper function to get initials from a full name
    const getInitials = (name: string | undefined): string => {
        if (!name) return '';
        const words = name.split(' ');
        if (words.length > 1) {
            return words[0][0].toUpperCase() + words[1][0].toUpperCase();
        }
        return words[0].substring(0, 2).toUpperCase();
    };

    return (
        <div className={styles.chatListContainer}>
            <header className={styles.header}>
                <h1 className={styles.title}>Chats</h1>
                <div className={styles.headerIcons}>
                    <SearchIcon className={styles.icon} />
                    {/* This block now conditionally renders the image or the initials */}
                    {props.reqUser?.avatarUrl ? (
                        <img src={props.reqUser.avatarUrl} alt={props.reqUser.fullName} className={styles.myAvatar} />
                    ) : (
                        <div className={styles.avatarInitials}>
                            {getInitials(props.reqUser?.fullName)}
                        </div>
                    )}
                </div>
            </header>

            <div className={styles.tabs}>
                <button
                    className={`${styles.tabButton} ${activeTab === 'Friends' ? styles.active : ''}`}
                    onClick={() => setActiveTab('Friends')}
                >
                    Friends
                </button>
                <button
                    className={`${styles.tabButton} ${activeTab === 'Groups' ? styles.active : ''}`}
                    onClick={() => setActiveTab('Groups')}
                >
                    Groups
                </button>
            </div>

            <div className={styles.chatList}>
                <div className={styles.noChats}>
                    <h2>No Chats Yet</h2>
                    <p>Start a conversation to see it here.</p>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;