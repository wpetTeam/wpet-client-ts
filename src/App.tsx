import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { WriteDiary } from 'views/Diary/services';
import { Schedule } from 'views/MyAccount/services';
import { Registeration } from 'views/PetInfo/services';
import { About, Home, PetInfo, Community, MyAccount, Diary } from './views';

const App = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="home" element={<Home />} />
                <Route path="diary" element={<Diary />}>
                    <Route path="write" element={<WriteDiary />} />
                </Route>
                <Route path="pet-info/*" element={<PetInfo />}></Route>
                <Route
                    path="registeration/step-1"
                    element={<Registeration />}
                />
                <Route path="community" element={<Community />} />
                <Route path="my-account" element={<MyAccount />}>
                    <Route path="schedule" element={<Schedule />} />
                </Route>
            </Routes>
        </React.Fragment>
    );
};

export default App;
