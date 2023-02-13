#!/usr/bin/env node

import meow from 'meow';
import fetch from 'node-fetch';
import YAML from 'yaml';
import { generateKey, encrypt } from './src/shared/helpers/crypto.js';

const cli = meow(
    `
	Usage
	  $ hemmelig <secret>

	Options
      --title,     -t  The secret title
      --password,  -p  The password to protect the secret
      --lifetime,  -l  The lifetime of the secret
      --maxViews,  -m  The max views of the secret
      --cidr,      -c  Provide the IP or CIDR range
      --expire,    -e  Burn the secret only after the expire time
      --url,       -u  If you have your own instance of the Hemmelig.app
      --output,    -o  Present the result as json|yaml. Example: --output=json

	Examples
      $ hemmelig "my super secret" --password=1337
      [*] Hemmelig.app URL: https://hemmelig.app/secret/myencryptionkey/thesecretid

      # Pipe data to the hemmelig cli
      $ cat mysecret.txt | hemmelig
      [*] Hemmelig.app URL: https://hemmelig.app/secret/myencryptionkey2/thesecretid2

      # Different output
      $ hemmelig "I am secret" -o=json
      {"encryptionKey":"9LiWq3iMAF0IkQs1tecOxbYKFesEnTN9","secretId":"manageable_CEsgWtxEaNNbwld6PjwyF1bQaiy4jQl9","url":"https://hemmelig.app/secret/9LiWq3iMAF0IkQs1tecOxbYKFesEnTN9/manageable_CEsgWtxEaNNbwld6PjwyF1bQaiy4jQl9"}
`,
    {
        importMeta: import.meta,
        flags: {
            title: {
                type: 'string',
                alias: 't',
                default: '',
            },
            password: {
                type: 'string',
                alias: 'p',
                default: '',
            },
            lifetime: {
                type: 'number',
                alias: 'l',
                default: 3600,
            },
            maxViews: {
                type: 'number',
                alias: 'm',
                default: 1,
            },
            cidr: {
                type: 'string',
                alias: 'c',
                default: '',
            },
            expire: {
                type: 'boolean',
                alias: 'e',
                default: false,
            },
            url: {
                type: 'string',
                alias: 'u',
                default: 'https://hemmelig.app',
            },
            output: {
                type: 'string',
                alias: 'o',
                default: 'text',
            },
        },
    }
);

const createSecret = async (data = {}) => {
    const options = {
        method: 'POST',
        cache: 'no-cache',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const data = await fetch(`${cli.flags.url}/api/secret`, options);
        const json = await data.json();

        return { ...json, statusCode: data.status };
    } catch (error) {
        console.error(error);

        return { error: 'Failed to create your secret' };
    }
};

const getSecretURL = (encryptionKey, secretId) =>
    `${cli.flags.url}/secret/${encryptionKey}/${secretId}`;

const createOutput = (encryptionKey, secretId) => {
    const url = getSecretURL(encryptionKey, secretId);

    if (cli.flags.output === 'json') {
        return JSON.stringify({
            encryptionKey,
            secretId,
            url,
        });
    } else if (cli.flags.output === 'yaml') {
        return YAML.stringify({
            encryptionKey,
            secretId,
            url,
        });
    }

    return `[*] Hemmelig.app URL: ${url}`;
};

const submit = async (secret, values) => {
    if (!secret) {
        console.error('No secret set');

        return;
    }

    const userEncryptionKey = generateKey();

    const body = {
        text: encrypt(secret, userEncryptionKey),
        files: [],
        title: encrypt(values.title, userEncryptionKey),
        password: values.password,
        ttl: values.lifetime,
        allowedIp: values.cidr,
        preventBurn: values.expire,
        maxViews: values.maxViews,
    };

    const json = await createSecret(body);

    console.log(createOutput(userEncryptionKey, json.id));
};

async function getSecretText() {
    const [secret] = cli.input;

    if (secret) {
        return secret;
    }

    const data = await new Promise((res) => {
        process.stdin.once('data', function (data) {
            res(data.toString().trim());
        });
    });

    return data;
}

// Execute the CLI
(async function execute() {
    const secret = await getSecretText();

    submit(secret, cli.flags);
})();