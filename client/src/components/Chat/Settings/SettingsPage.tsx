import React from 'react';

import {IAppContext} from '../../../utils/TranslationProvider';
import StyledPageContainer from '../StyledPageContainer/StyledPageContainer';

const SettingsPage = ({ appContext, changeTheme } : 
                        { appContext: IAppContext, changeTheme: () => void }) => {
        <StyledPageContainer>
            <UserProfile translations={appContext}/>
            <ThemeSelector translations={appContext} changeTheme={changeTheme}/>
            <ClockModeSelector translations={appContext}/>
            <SendingOptions translations={appContext}/>
            <ResetButton translations={appContext}/>
        </StyledPageContainer>

};

export default SettingsPage;