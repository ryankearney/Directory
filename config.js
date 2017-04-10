var config = { url: 'ldap://example.com',
               baseDN: 'ou=Users,dc=example,dc=com',
               username: 'directory@example.com',
               password: 'Password123',
               attributes: {
                        user: ['givenName', 'sn', 'title', 'department', 'ipPhone', 'telephoneNumber']
		}
}

module.exports = config;
