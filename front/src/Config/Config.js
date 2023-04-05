
export const configMultipart = {
    headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Token ${localStorage.getItem('auth_token')}`,

    }
}; 

export const configLoadUser = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('auth_token')}`,
        'Accept': 'application/json',
    }
};

export const configGoogle = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

export const configCheck = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}; 

export const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};


