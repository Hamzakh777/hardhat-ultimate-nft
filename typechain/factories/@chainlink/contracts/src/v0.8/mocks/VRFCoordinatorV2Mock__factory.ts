/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  VRFCoordinatorV2Mock,
  VRFCoordinatorV2MockInterface,
} from "../../../../../../@chainlink/contracts/src/v0.8/mocks/VRFCoordinatorV2Mock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint96",
        name: "_baseFee",
        type: "uint96",
      },
      {
        internalType: "uint96",
        name: "_gasPriceLink",
        type: "uint96",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InsufficientBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidConsumer",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidRandomWords",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSubscription",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "MustBeSubOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "TooManyConsumers",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "subId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "consumer",
        type: "address",
      },
    ],
    name: "ConsumerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "subId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "consumer",
        type: "address",
      },
    ],
    name: "ConsumerRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "outputSeed",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint96",
        name: "payment",
        type: "uint96",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    name: "RandomWordsFulfilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "keyHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "preSeed",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "subId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "minimumRequestConfirmations",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "callbackGasLimit",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "numWords",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RandomWordsRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "subId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "SubscriptionCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "subId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "SubscriptionCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "subId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "SubscriptionFunded",
    type: "event",
  },
  {
    inputs: [],
    name: "BASE_FEE",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GAS_PRICE_LINK",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_CONSUMERS",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
    ],
    name: "acceptSubscriptionOwnerTransfer",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "_consumer",
        type: "address",
      },
    ],
    name: "addConsumer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "cancelSubscription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "_consumer",
        type: "address",
      },
    ],
    name: "consumerIsAdded",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "createSubscription",
    outputs: [
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_consumer",
        type: "address",
      },
    ],
    name: "fulfillRandomWords",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_consumer",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_words",
        type: "uint256[]",
      },
    ],
    name: "fulfillRandomWordsWithOverride",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
      {
        internalType: "uint96",
        name: "_amount",
        type: "uint96",
      },
    ],
    name: "fundSubscription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getConfig",
    outputs: [
      {
        internalType: "uint16",
        name: "minimumRequestConfirmations",
        type: "uint16",
      },
      {
        internalType: "uint32",
        name: "maxGasLimit",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "stalenessSeconds",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "gasAfterPaymentCalculation",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFallbackWeiPerUnitLink",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFeeConfig",
    outputs: [
      {
        internalType: "uint32",
        name: "fulfillmentFlatFeeLinkPPMTier1",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "fulfillmentFlatFeeLinkPPMTier2",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "fulfillmentFlatFeeLinkPPMTier3",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "fulfillmentFlatFeeLinkPPMTier4",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "fulfillmentFlatFeeLinkPPMTier5",
        type: "uint32",
      },
      {
        internalType: "uint24",
        name: "reqsForTier2",
        type: "uint24",
      },
      {
        internalType: "uint24",
        name: "reqsForTier3",
        type: "uint24",
      },
      {
        internalType: "uint24",
        name: "reqsForTier4",
        type: "uint24",
      },
      {
        internalType: "uint24",
        name: "reqsForTier5",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRequestConfig",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
    ],
    name: "getSubscription",
    outputs: [
      {
        internalType: "uint96",
        name: "balance",
        type: "uint96",
      },
      {
        internalType: "uint64",
        name: "reqCount",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "consumers",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "subId",
        type: "uint64",
      },
    ],
    name: "pendingRequestExists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "_consumer",
        type: "address",
      },
    ],
    name: "removeConsumer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_keyHash",
        type: "bytes32",
      },
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
      {
        internalType: "uint16",
        name: "_minimumRequestConfirmations",
        type: "uint16",
      },
      {
        internalType: "uint32",
        name: "_callbackGasLimit",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "_numWords",
        type: "uint32",
      },
    ],
    name: "requestRandomWords",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "requestSubscriptionOwnerTransfer",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60e0604052606461ffff1660c09061ffff1660f01b8152506001805560646002553480156200002d57600080fd5b5060405162002de138038062002de18339818101604052810190620000539190620000f7565b816bffffffffffffffffffffffff166080816bffffffffffffffffffffffff1660a01b81525050806bffffffffffffffffffffffff1660a0816bffffffffffffffffffffffff1660a01b8152505050506200013e565b600080fd5b60006bffffffffffffffffffffffff82169050919050565b620000d181620000ae565b8114620000dd57600080fd5b50565b600081519050620000f181620000c6565b92915050565b60008060408385031215620001115762000110620000a9565b5b60006200012185828601620000e0565b92505060206200013485828601620000e0565b9150509250929050565b60805160a01c60a05160a01c60c05160f01c612c556200018c60003960008181610cb70152610e0201526000818161079f01526115240152600081816107e401526109f30152612c556000f3fe608060405234801561001057600080fd5b506004361061012b5760003560e01c806382359740116100ad578063afc69b5311610071578063afc69b5314610317578063c3f909d414610333578063d7ae1d3014610354578063e82ad7d414610370578063ed5eb06d146103a05761012b565b806382359740146102705780639f87fad71461028c578063a21a23e4146102a8578063a410347f146102c6578063a47c7696146102e45761012b565b80635d3b1d30116100f45780635d3b1d30146101c45780635fbbc0d2146101f457806364d51a2a1461021a5780637341c10c14610238578063808974ff146102545761012b565b80620122911461013057806304c357cb1461015057806308e3898e1461016c578063356dac71146101885780633d18651e146101a6575b600080fd5b6101386103d0565b60405161014793929190611dd1565b60405180910390f35b61016a60048036038101906101659190611ec1565b610430565b005b61018660048036038101906101819190612090565b61046b565b005b6101906109e2565b60405161019d9190612118565b60405180910390f35b6101ae6109f1565b6040516101bb919061215a565b60405180910390f35b6101de60048036038101906101d991906121f9565b610a15565b6040516101eb9190612283565b60405180910390f35b6101fc610c76565b604051610211999897969594939291906122bc565b60405180910390f35b610222610cb5565b60405161022f9190612349565b60405180910390f35b610252600480360381019061024d9190611ec1565b610cd9565b005b61026e60048036038101906102699190612364565b610f6d565b005b61028a600480360381019061028591906123a4565b610fc5565b005b6102a660048036038101906102a19190611ec1565b611000565b005b6102b061136d565b6040516102bd91906123e0565b60405180910390f35b6102ce611522565b6040516102db919061215a565b60405180910390f35b6102fe60048036038101906102f991906123a4565b611546565b60405161030e94939291906124c8565b60405180910390f35b610331600480360381019061032c9190612540565b61174c565b005b61033b611917565b60405161034b9493929190612580565b60405180910390f35b61036e60048036038101906103699190611ec1565b611937565b005b61038a600480360381019061038591906123a4565b611b5a565b60405161039791906125e0565b60405180910390f35b6103ba60048036038101906103b59190611ec1565b611b97565b6040516103c791906125e0565b60405180910390f35b60008060606003621e8480600067ffffffffffffffff8111156103f6576103f5611f4d565b5b6040519080825280602002602001820160405280156104245781602001602082028036833780820191505090505b50925092509250909192565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046290612658565b60405180910390fd5b60005a905060006005600086815260200190815260200160002060000160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1614156104e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104df906126c4565b60405180910390fd5b6000600560008681526020019081526020016000206040518060600160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016000820160089054906101000a900463ffffffff1663ffffffff1663ffffffff16815260200160008201600c9054906101000a900463ffffffff1663ffffffff1663ffffffff1681525050905060008351141561066057806040015163ffffffff1667ffffffffffffffff8111156105b6576105b5611f4d565b5b6040519080825280602002602001820160405280156105e45781602001602082028036833780820191505090505b50925060005b816040015163ffffffff1681101561065a57858160405160200161060f9291906126e4565b6040516020818303038152906040528051906020012060001c84828151811061063b5761063a61270d565b5b60200260200101818152505080806106529061276b565b9150506105ea565b506106a5565b806040015163ffffffff168351146106a4576040517f3f3df5b600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5b600080631fe543e360e01b87866040516024016106c3929190612872565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905060008673ffffffffffffffffffffffffffffffffffffffff16846020015163ffffffff1683604051610754919061291c565b60006040518083038160008787f1925050503d8060008114610792576040519150601f19603f3d011682016040523d82523d6000602084013e610797565b606091505b5050905060007f00000000000000000000000000000000000000000000000000000000000000006bffffffffffffffffffffffff165a876107d89190612933565b6107e29190612967565b7f00000000000000000000000000000000000000000000000000000000000000006bffffffffffffffffffffffff1661081b91906129c1565b9050806bffffffffffffffffffffffff1660036000876000015167ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060000160149054906101000a90046bffffffffffffffffffffffff166bffffffffffffffffffffffff1610156108b9576040517ff4d678b800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060036000876000015167ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060000160148282829054906101000a90046bffffffffffffffffffffffff1661090e9190612a17565b92506101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550600560008a8152602001908152602001600020600080820160006101000a81549067ffffffffffffffff02191690556000820160086101000a81549063ffffffff021916905560008201600c6101000a81549063ffffffff02191690555050887f7dffc5ae5ee4e2e4df1651cf6ad329a73cebdb728f37ea0187b9b17e036756e48a83856040516109cf93929190612a4b565b60405180910390a2505050505050505050565b6000660e35fa931a0000905090565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008433610a238282611b97565b610a59576040517f71e8313700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600360008967ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610b0a576040517f1f6a65b600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600060016000815480929190610b1f9061276b565b919050559050600060026000815480929190610b3a9061276b565b91905055905060405180606001604052808a67ffffffffffffffff1681526020018863ffffffff1681526020018763ffffffff168152506005600084815260200190815260200160002060008201518160000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060208201518160000160086101000a81548163ffffffff021916908363ffffffff160217905550604082015181600001600c6101000a81548163ffffffff021916908363ffffffff1602179055509050503373ffffffffffffffffffffffffffffffffffffffff168967ffffffffffffffff168b7f63373d1c4696214b898952999c9aaec57dac1ee2723cec59bea6888f489a977285858d8d8d604051610c5e959493929190612a82565b60405180910390a48194505050505095945050505050565b6000806000806000806000806000620186a080620186a080620186a0600080600080985098509850985098509850985098509850909192939495969798565b7f000000000000000000000000000000000000000000000000000000000000000081565b816000600360008367ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610d90576040517f1f6a65b600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610e0057806040517fd8a3fb52000000000000000000000000000000000000000000000000000000008152600401610df79190612ad5565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000061ffff16600460008667ffffffffffffffff1667ffffffffffffffff168152602001908152602001600020805490501415610e88576040517f05a48e0f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e928484611b97565b15610e9c57610f67565b600460008567ffffffffffffffff1667ffffffffffffffff168152602001908152602001600020839080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508367ffffffffffffffff167f752ead9f4536ec1319ee3a5a604e1d65eded22e0924251552ba14ae4faa1bbc384604051610f5e9190612ad5565b60405180910390a25b50505050565b610fc18282600067ffffffffffffffff811115610f8d57610f8c611f4d565b5b604051908082528060200260200182016040528015610fbb5781602001602082028036833780820191505090505b5061046b565b5050565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ff790612658565b60405180910390fd5b816000600360008367ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156110b7576040517f1f6a65b600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461112757806040517fd8a3fb5200000000000000000000000000000000000000000000000000000000815260040161111e9190612ad5565b60405180910390fd5b83836111338282611b97565b611169576040517f71e8313700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000600460008867ffffffffffffffff1667ffffffffffffffff168152602001908152602001600020905060005b8180549050811015611321578673ffffffffffffffffffffffffffffffffffffffff168282815481106111cd576111cc61270d565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561130e57600082600184805490506112289190612933565b815481106112395761123861270d565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508083838154811061127a5761127961270d565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828054806112d3576112d2612af0565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055905550611321565b80806113199061276b565b915050611197565b508667ffffffffffffffff167ff9bc9d5b5733d904409def43a5ecc888dbdac9a95687780d8fd489d3bb3813fc8760405161135c9190612ad5565b60405180910390a250505050505050565b600080600081819054906101000a900467ffffffffffffffff168092919061139490612b1f565b91906101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055505060405180604001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200160006bffffffffffffffffffffffff16815250600360008060009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff16021790555090505060008054906101000a900467ffffffffffffffff1667ffffffffffffffff167f464722b4166576d3dcbba877b999bc35cf911f4eaf434b7eba68fa113951d0bf336040516115009190612ad5565b60405180910390a260008054906101000a900467ffffffffffffffff16905090565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008060006060600073ffffffffffffffffffffffffffffffffffffffff16600360008767ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156115fe576040517f1f6a65b600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600360008667ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060000160149054906101000a90046bffffffffffffffffffffffff166000600360008867ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600460008967ffffffffffffffff1667ffffffffffffffff1681526020019081526020016000208080548060200260200160405190810160405280929190818152602001828054801561173657602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116116ec575b5050505050905093509350935093509193509193565b600073ffffffffffffffffffffffffffffffffffffffff16600360008467ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156117fd576040517f1f6a65b600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000600360008467ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060000160149054906101000a90046bffffffffffffffffffffffff16905081600360008567ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060000160148282829054906101000a90046bffffffffffffffffffffffff166118959190612b50565b92506101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055508267ffffffffffffffff167fd39ec07f4e209f627a4c427971473820dc129761ba28de8906bd56f57101d4f88284846118fc9190612b50565b60405161190a929190612bcd565b60405180910390a2505050565b6000806000806004622625a0610a8c618205935093509350935090919293565b816000600360008367ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156119ee576040517f1f6a65b600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611a5e57806040517fd8a3fb52000000000000000000000000000000000000000000000000000000008152600401611a559190612ad5565b60405180910390fd5b8367ffffffffffffffff167fe8ed5b475a5b5987aa9165e8731bb78043f39eee32ec5a1169a89e27fcd4981584600360008867ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060000160149054906101000a90046bffffffffffffffffffffffff16604051611adc929190612bf6565b60405180910390a2600360008567ffffffffffffffff1667ffffffffffffffff168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556000820160146101000a8154906bffffffffffffffffffffffff0219169055505050505050565b60006040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b8e90612658565b60405180910390fd5b600080600460008567ffffffffffffffff1667ffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015611c4157602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611bf7575b5050505050905060005b8151811015611cc0578373ffffffffffffffffffffffffffffffffffffffff16828281518110611c7e57611c7d61270d565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff161415611cad57600192505050611cc7565b8080611cb89061276b565b915050611c4b565b5060009150505b92915050565b600061ffff82169050919050565b611ce481611ccd565b82525050565b600063ffffffff82169050919050565b611d0381611cea565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000819050919050565b611d4881611d35565b82525050565b6000611d5a8383611d3f565b60208301905092915050565b6000602082019050919050565b6000611d7e82611d09565b611d888185611d14565b9350611d9383611d25565b8060005b83811015611dc4578151611dab8882611d4e565b9750611db683611d66565b925050600181019050611d97565b5085935050505092915050565b6000606082019050611de66000830186611cdb565b611df36020830185611cfa565b8181036040830152611e058184611d73565b9050949350505050565b6000604051905090565b600080fd5b600080fd5b600067ffffffffffffffff82169050919050565b611e4081611e23565b8114611e4b57600080fd5b50565b600081359050611e5d81611e37565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611e8e82611e63565b9050919050565b611e9e81611e83565b8114611ea957600080fd5b50565b600081359050611ebb81611e95565b92915050565b60008060408385031215611ed857611ed7611e19565b5b6000611ee685828601611e4e565b9250506020611ef785828601611eac565b9150509250929050565b6000819050919050565b611f1481611f01565b8114611f1f57600080fd5b50565b600081359050611f3181611f0b565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611f8582611f3c565b810181811067ffffffffffffffff82111715611fa457611fa3611f4d565b5b80604052505050565b6000611fb7611e0f565b9050611fc38282611f7c565b919050565b600067ffffffffffffffff821115611fe357611fe2611f4d565b5b602082029050602081019050919050565b600080fd5b600061200c61200784611fc8565b611fad565b9050808382526020820190506020840283018581111561202f5761202e611ff4565b5b835b8181101561205857806120448882611f22565b845260208401935050602081019050612031565b5050509392505050565b600082601f83011261207757612076611f37565b5b8135612087848260208601611ff9565b91505092915050565b6000806000606084860312156120a9576120a8611e19565b5b60006120b786828701611f22565b93505060206120c886828701611eac565b925050604084013567ffffffffffffffff8111156120e9576120e8611e1e565b5b6120f586828701612062565b9150509250925092565b6000819050919050565b612112816120ff565b82525050565b600060208201905061212d6000830184612109565b92915050565b60006bffffffffffffffffffffffff82169050919050565b61215481612133565b82525050565b600060208201905061216f600083018461214b565b92915050565b61217e81611d35565b811461218957600080fd5b50565b60008135905061219b81612175565b92915050565b6121aa81611ccd565b81146121b557600080fd5b50565b6000813590506121c7816121a1565b92915050565b6121d681611cea565b81146121e157600080fd5b50565b6000813590506121f3816121cd565b92915050565b600080600080600060a0868803121561221557612214611e19565b5b60006122238882890161218c565b955050602061223488828901611e4e565b9450506040612245888289016121b8565b9350506060612256888289016121e4565b9250506080612267888289016121e4565b9150509295509295909350565b61227d81611f01565b82525050565b60006020820190506122986000830184612274565b92915050565b600062ffffff82169050919050565b6122b68161229e565b82525050565b6000610120820190506122d2600083018c611cfa565b6122df602083018b611cfa565b6122ec604083018a611cfa565b6122f96060830189611cfa565b6123066080830188611cfa565b61231360a08301876122ad565b61232060c08301866122ad565b61232d60e08301856122ad565b61233b6101008301846122ad565b9a9950505050505050505050565b600060208201905061235e6000830184611cdb565b92915050565b6000806040838503121561237b5761237a611e19565b5b600061238985828601611f22565b925050602061239a85828601611eac565b9150509250929050565b6000602082840312156123ba576123b9611e19565b5b60006123c884828501611e4e565b91505092915050565b6123da81611e23565b82525050565b60006020820190506123f560008301846123d1565b92915050565b61240481611e83565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61243f81611e83565b82525050565b60006124518383612436565b60208301905092915050565b6000602082019050919050565b60006124758261240a565b61247f8185612415565b935061248a83612426565b8060005b838110156124bb5781516124a28882612445565b97506124ad8361245d565b92505060018101905061248e565b5085935050505092915050565b60006080820190506124dd600083018761214b565b6124ea60208301866123d1565b6124f760408301856123fb565b8181036060830152612509818461246a565b905095945050505050565b61251d81612133565b811461252857600080fd5b50565b60008135905061253a81612514565b92915050565b6000806040838503121561255757612556611e19565b5b600061256585828601611e4e565b92505060206125768582860161252b565b9150509250929050565b60006080820190506125956000830187611cdb565b6125a26020830186611cfa565b6125af6040830185611cfa565b6125bc6060830184611cfa565b95945050505050565b60008115159050919050565b6125da816125c5565b82525050565b60006020820190506125f560008301846125d1565b92915050565b600082825260208201905092915050565b7f6e6f7420696d706c656d656e7465640000000000000000000000000000000000600082015250565b6000612642600f836125fb565b915061264d8261260c565b602082019050919050565b6000602082019050818103600083015261267181612635565b9050919050565b7f6e6f6e6578697374656e74207265717565737400000000000000000000000000600082015250565b60006126ae6013836125fb565b91506126b982612678565b602082019050919050565b600060208201905081810360008301526126dd816126a1565b9050919050565b60006040820190506126f96000830185612274565b6127066020830184612274565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061277682611f01565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156127a9576127a861273c565b5b600182019050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6127e981611f01565b82525050565b60006127fb83836127e0565b60208301905092915050565b6000602082019050919050565b600061281f826127b4565b61282981856127bf565b9350612834836127d0565b8060005b8381101561286557815161284c88826127ef565b975061285783612807565b925050600181019050612838565b5085935050505092915050565b60006040820190506128876000830185612274565b81810360208301526128998184612814565b90509392505050565b600081519050919050565b600081905092915050565b60005b838110156128d65780820151818401526020810190506128bb565b838111156128e5576000848401525b50505050565b60006128f6826128a2565b61290081856128ad565b93506129108185602086016128b8565b80840191505092915050565b600061292882846128eb565b915081905092915050565b600061293e82611f01565b915061294983611f01565b92508282101561295c5761295b61273c565b5b828203905092915050565b600061297282611f01565b915061297d83611f01565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156129b6576129b561273c565b5b828202905092915050565b60006129cc82611f01565b91506129d783611f01565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612a0c57612a0b61273c565b5b828201905092915050565b6000612a2282612133565b9150612a2d83612133565b925082821015612a4057612a3f61273c565b5b828203905092915050565b6000606082019050612a606000830186612274565b612a6d602083018561214b565b612a7a60408301846125d1565b949350505050565b600060a082019050612a976000830188612274565b612aa46020830187612274565b612ab16040830186611cdb565b612abe6060830185611cfa565b612acb6080830184611cfa565b9695505050505050565b6000602082019050612aea60008301846123fb565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6000612b2a82611e23565b915067ffffffffffffffff821415612b4557612b4461273c565b5b600182019050919050565b6000612b5b82612133565b9150612b6683612133565b9250826bffffffffffffffffffffffff03821115612b8757612b8661273c565b5b828201905092915050565b6000819050919050565b6000612bb7612bb2612bad84612133565b612b92565b611f01565b9050919050565b612bc781612b9c565b82525050565b6000604082019050612be26000830185612bbe565b612bef6020830184612bbe565b9392505050565b6000604082019050612c0b60008301856123fb565b612c186020830184612bbe565b939250505056fea26469706673582212206c9869b86eeddb970beee3853cfd65144c2d7b88be84beabe162f4d22dc5fde864736f6c63430008080033";

type VRFCoordinatorV2MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VRFCoordinatorV2MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VRFCoordinatorV2Mock__factory extends ContractFactory {
  constructor(...args: VRFCoordinatorV2MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _baseFee: PromiseOrValue<BigNumberish>,
    _gasPriceLink: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<VRFCoordinatorV2Mock> {
    return super.deploy(
      _baseFee,
      _gasPriceLink,
      overrides || {}
    ) as Promise<VRFCoordinatorV2Mock>;
  }
  override getDeployTransaction(
    _baseFee: PromiseOrValue<BigNumberish>,
    _gasPriceLink: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_baseFee, _gasPriceLink, overrides || {});
  }
  override attach(address: string): VRFCoordinatorV2Mock {
    return super.attach(address) as VRFCoordinatorV2Mock;
  }
  override connect(signer: Signer): VRFCoordinatorV2Mock__factory {
    return super.connect(signer) as VRFCoordinatorV2Mock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VRFCoordinatorV2MockInterface {
    return new utils.Interface(_abi) as VRFCoordinatorV2MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VRFCoordinatorV2Mock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as VRFCoordinatorV2Mock;
  }
}
