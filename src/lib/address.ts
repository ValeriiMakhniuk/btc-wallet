import * as ecc from "@bitcoin-js/tiny-secp256k1-asmjs";
import * as bitcoin from "bitcoinjs-lib";
import ECPairFactory, { ECPairInterface } from "ecpair";
import { get, set } from "./local-storage";
import { KEY_PAIR_STORADGE_KEY } from "@/constants";
import { TStorageKeyPair } from "@/types";

const ECPair = ECPairFactory(ecc);
const TESTNET = bitcoin.networks.testnet;

const ADDRESS_TRUNCATE_RE = /([\w\d]{6}).{1,}([\w\d]{6})/;

export function generateKeyPair() {
  const keyPair = ECPair.makeRandom({ network: TESTNET });

  return keyPair;
}

export function getAddressFromKeys(publicKey?: ECPairInterface["publicKey"]) {
  try {
    const { address } = bitcoin.payments.p2pkh({
      pubkey: publicKey,
      network: TESTNET,
    });

    return address;
  } catch (e) {
    return null;
  }
}

export function truncateAddress(address: string, separator: string = "...") {
  return address.replace(ADDRESS_TRUNCATE_RE, (_, g1, g2) => {
    return `${g1}${separator}${g2}`;
  });
}

export function saveKeysToStorge(keyPair: ECPairInterface) {
  const { publicKey, privateKey } = keyPair;

  const keyPairToSave = {
    publicKey: publicKey.toString("base64"),
    privateKey: privateKey?.toString("base64"),
  };

  set(KEY_PAIR_STORADGE_KEY, keyPairToSave);
}

export function getKeysFromStoarge() {
  const storageKeys = get<TStorageKeyPair | null>(KEY_PAIR_STORADGE_KEY);

  if (!storageKeys) {
    return null;
  }

  return {
    publicKey: Buffer.from(storageKeys.publicKey, "base64"),
    privateKey: Buffer.from(storageKeys.privateKey ?? "", "base64"),
  };
}

export function deleteKeysFromStorage() {
  set(KEY_PAIR_STORADGE_KEY, null);
}
