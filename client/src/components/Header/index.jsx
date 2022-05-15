import React from "react";

import { TeamOutlined, FormOutlined} from '@ant-design/icons';

import './Header.scss';

const Header = () => {
    return (
        <aside className="chat__list">
            <header className="chat__list--header">
                <div className="header__content">
                    <div className="header__content--top">
                        <div className="header__content--icon--users">
                            <TeamOutlined style={{ fontSize: '26px'}} />
                        </div>
                        <div className="header__content--title">
                            <span>Список диалогов</span>
                        </div>
                    </div>
                    <div className="header__content--icon--search">
                        <FormOutlined style={{ fontSize: '26px'}} />
                    </div>
                </div>
            </header>
        </aside>
    )
};

export default Header;