import React, { useEffect, useMemo, useState } from "react";
import { Header, SearchInput, DialogsList} from "../../components/index";
import { fetchDialog } from "../../API";
import { useDispatch, useSelector } from "react-redux";
import './Chat.scss'

const Chat = () => {
    
    const dispatch = useDispatch();
    const data = useSelector(state => state.dialog.items);
    
    const [searchDialog, setSearchDialog] = useState('');
    const [sortedDialogs, setSortedDialog] = useState([...data]);

    const searchDialogs = useMemo(() => {
        return sortedDialogs.filter(dialog => dialog.message.user.firstName.toLowerCase().includes(searchDialog.toLowerCase()));
    }, [searchDialog, sortedDialogs])
    
    useEffect(() => {
        if(!sortedDialogs.length) {
            const {fetchDialogs} = fetchDialog;
            dispatch(fetchDialogs());
            setSortedDialog([...data]);
        };
    }, [data]);

    return (
        <div className="chat">
            <Header />
            <SearchInput 
                value={searchDialog}
                onChange={e => setSearchDialog(e.target.value)}
            />
            <DialogsList  items={searchDialogs} />
        </div>
    )
};

export default Chat;


