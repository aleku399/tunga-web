import { combineReducers } from 'redux'
import * as ProfileActions from '../actions/ProfileActions'
import { PATH_CHANGE } from '../actions/NavActions'

function profile(state = {}, action) {
    switch (action.type) {
        case ProfileActions.RETRIEVE_PROFILE_SUCCESS:
        case ProfileActions.UPDATE_PROFILE_SUCCESS:
            return action.profile;
        case ProfileActions.RETRIEVE_PROFILE_FAILED:
            return {};
        default:
            return state;
    }
}

function countries(state = [], action) {
    switch (action.type) {
        case ProfileActions.GET_COUNTRIES_SUCCESS:
            return action.countries;
        case ProfileActions.GET_COUNTRIES_FAILED:
            return [];
        default:
            return state;
    }
}

function isRetrieving(state = false, action) {
    switch (action.type) {
        case ProfileActions.RETRIEVE_PROFILE_START:
            return true;
        case ProfileActions.RETRIEVE_PROFILE_SUCCESS:
        case ProfileActions.RETRIEVE_PROFILE_FAILED:
            return false;
        default:
            return state;
    }
}

const defaultStatuses = {profile: false, user: false, account: false, security: false};

function isSaving(state = defaultStatuses, action) {
    switch (action.type) {
        case ProfileActions.UPDATE_PROFILE_START:
            return {...state, profile: true};
        case ProfileActions.UPDATE_PROFILE_SUCCESS:
        case ProfileActions.UPDATE_PROFILE_FAILED:
            return {...state, profile: false};
        case ProfileActions.UPDATE_AUTH_USER_START:
            return {...state, user: true};
        case ProfileActions.UPDATE_AUTH_USER_SUCCESS:
        case ProfileActions.UPDATE_AUTH_USER_FAILED:
            return {...state, user: false};
        case ProfileActions.UPDATE_ACCOUNT_INFO_START:
            return {...state, account: true};
        case ProfileActions.UPDATE_ACCOUNT_INFO_SUCCESS:
        case ProfileActions.UPDATE_ACCOUNT_INFO_FAILED:
            return {...state, account: false};
        case ProfileActions.UPDATE_PASSWORD_START:
            return {...state, security: true};
        case ProfileActions.UPDATE_PASSWORD_SUCCESS:
        case ProfileActions.UPDATE_PASSWORD_FAILED:
            return {...state, security: false};
        default:
            return state;
    }
}

function isSaved(state = defaultStatuses, action) {
    switch (action.type) {
        case ProfileActions.UPDATE_PROFILE_SUCCESS:
            return {...state, profile: true};
        case ProfileActions.UPDATE_PROFILE_START:
        case ProfileActions.UPDATE_PROFILE_FAILED:
            return {...state, profile: false};
        case ProfileActions.UPDATE_AUTH_USER_SUCCESS:
            return {...state, user: true};
        case ProfileActions.UPDATE_AUTH_USER_START:
        case ProfileActions.UPDATE_AUTH_USER_FAILED:
            return {...state, user: false};
        case ProfileActions.UPDATE_ACCOUNT_INFO_SUCCESS:
            return {...state, account: true};
        case ProfileActions.UPDATE_ACCOUNT_INFO_START:
        case ProfileActions.UPDATE_ACCOUNT_INFO_FAILED:
            return {...state, account: false};
        case ProfileActions.UPDATE_PASSWORD_SUCCESS:
            return {...state, security: true};
        case ProfileActions.UPDATE_PASSWORD_START:
        case ProfileActions.UPDATE_PASSWORD_FAILED:
            return {...state, security: false};
        case ProfileActions.RETRIEVE_PROFILE_START:
        case PATH_CHANGE:
            return defaultStatuses;
        default:
            return state;
    }
}

function error(state = {}, action) {
    switch (action.type) {
        case ProfileActions.UPDATE_PROFILE_FAILED:
            var error = action.error;
            return {...state, profile: error};
        case ProfileActions.UPDATE_PROFILE_START:
        case ProfileActions.UPDATE_PROFILE_SUCCESS:
            return {...state, profile: null};
        case ProfileActions.UPDATE_AUTH_USER_FAILED:
            return {...state, user: action.error};
        case ProfileActions.UPDATE_AUTH_USER_START:
        case ProfileActions.UPDATE_AUTH_USER_SUCCESS:
            return {...state, user: null};
        case ProfileActions.UPDATE_ACCOUNT_INFO_FAILED:
            return {...state, account: action.error};
        case ProfileActions.UPDATE_ACCOUNT_INFO_START:
        case ProfileActions.UPDATE_ACCOUNT_INFO_SUCCESS:
            return {...state, account: null};
        case ProfileActions.UPDATE_PASSWORD_FAILED:
            error = action.error;
            return {...state, security: error};
        case ProfileActions.UPDATE_PASSWORD_START:
        case ProfileActions.UPDATE_PASSWORD_SUCCESS:
            return {...state, security: null};
        default:
            return state;
    }
}

const Profile = combineReducers({
    profile,
    isRetrieving,
    isSaving,
    isSaved,
    error,
    countries
});

export default Profile;
