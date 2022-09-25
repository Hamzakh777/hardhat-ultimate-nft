/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { BasicNft, BasicNftInterface } from "../../contracts/BasicNft";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "TOKEN_URI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTokenCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    name: "mintNft",
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
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600581526020017f446f6769650000000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f444f470000000000000000000000000000000000000000000000000000000000815250816000908051906020019062000096929190620000c0565b508060019080519060200190620000af929190620000c0565b5050506000600681905550620001d5565b828054620000ce906200019f565b90600052602060002090601f016020900481019282620000f257600085556200013e565b82601f106200010d57805160ff19168380011785556200013e565b828001600101855582156200013e579182015b828111156200013d57825182559160200191906001019062000120565b5b5090506200014d919062000151565b5090565b5b808211156200016c57600081600090555060010162000152565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620001b857607f821691505b60208210811415620001cf57620001ce62000170565b5b50919050565b6122d280620001e56000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806370a0823111610097578063b88d4fde11610066578063b88d4fde146102ad578063c2229fea146102c9578063c87b56dd146102e7578063e985e9c51461031757610100565b806370a082311461022557806378ce90351461025557806395d89b4114610273578063a22cb4651461029157610100565b806323b872dd116100d357806323b872dd1461019f57806342842e0e146101bb5780636352211e146101d75780636e02007d1461020757610100565b806301ffc9a71461010557806306fdde0314610135578063081812fc14610153578063095ea7b314610183575b600080fd5b61011f600480360381019061011a9190611543565b610347565b60405161012c919061158b565b60405180910390f35b61013d610429565b60405161014a919061163f565b60405180910390f35b61016d60048036038101906101689190611697565b6104bb565b60405161017a9190611705565b60405180910390f35b61019d6004803603810190610198919061174c565b610501565b005b6101b960048036038101906101b4919061178c565b610619565b005b6101d560048036038101906101d0919061178c565b610679565b005b6101f160048036038101906101ec9190611697565b610699565b6040516101fe9190611705565b60405180910390f35b61020f61074b565b60405161021c91906117ee565b60405180910390f35b61023f600480360381019061023a9190611809565b610755565b60405161024c91906117ee565b60405180910390f35b61025d61080d565b60405161026a919061163f565b60405180910390f35b61027b610829565b604051610288919061163f565b60405180910390f35b6102ab60048036038101906102a69190611862565b6108bb565b005b6102c760048036038101906102c291906119d7565b6108d1565b005b6102d1610933565b6040516102de91906117ee565b60405180910390f35b61030160048036038101906102fc9190611697565b610963565b60405161030e919061163f565b60405180910390f35b610331600480360381019061032c9190611a5a565b610985565b60405161033e919061158b565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061041257507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610422575061042182610a19565b5b9050919050565b60606000805461043890611ac9565b80601f016020809104026020016040519081016040528092919081815260200182805461046490611ac9565b80156104b15780601f10610486576101008083540402835291602001916104b1565b820191906000526020600020905b81548152906001019060200180831161049457829003601f168201915b5050505050905090565b60006104c682610a83565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061050c82610699565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561057d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057490611b6d565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661059c610ace565b73ffffffffffffffffffffffffffffffffffffffff1614806105cb57506105ca816105c5610ace565b610985565b5b61060a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060190611bff565b60405180910390fd5b6106148383610ad6565b505050565b61062a610624610ace565b82610b8f565b610669576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066090611c91565b60405180910390fd5b610674838383610c24565b505050565b610694838383604051806020016040528060008152506108d1565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610742576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073990611cfd565b60405180910390fd5b80915050919050565b6000600654905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156107c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107bd90611d8f565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6040518060800160405280605781526020016122466057913981565b60606001805461083890611ac9565b80601f016020809104026020016040519081016040528092919081815260200182805461086490611ac9565b80156108b15780601f10610886576101008083540402835291602001916108b1565b820191906000526020600020905b81548152906001019060200180831161089457829003601f168201915b5050505050905090565b6108cd6108c6610ace565b8383610e8b565b5050565b6108e26108dc610ace565b83610b8f565b610921576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091890611c91565b60405180910390fd5b61092d84848484610ff8565b50505050565b600061094133600654611054565b6001600660008282546109549190611dde565b92505081905550600654905090565b6060604051806080016040528060578152602001612246605791399050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610a8c81611072565b610acb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ac290611cfd565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610b4983610699565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610b9b83610699565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610bdd5750610bdc8185610985565b5b80610c1b57508373ffffffffffffffffffffffffffffffffffffffff16610c03846104bb565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610c4482610699565b73ffffffffffffffffffffffffffffffffffffffff1614610c9a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c9190611ea6565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d0a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d0190611f38565b60405180910390fd5b610d158383836110de565b610d20600082610ad6565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d709190611f58565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610dc79190611dde565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610e868383836110e3565b505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610efa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ef190611fd8565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610feb919061158b565b60405180910390a3505050565b611003848484610c24565b61100f848484846110e8565b61104e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110459061206a565b60405180910390fd5b50505050565b61106e82826040518060200160405280600081525061127f565b5050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b505050565b505050565b60006111098473ffffffffffffffffffffffffffffffffffffffff166112da565b15611272578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611132610ace565b8786866040518563ffffffff1660e01b815260040161115494939291906120df565b602060405180830381600087803b15801561116e57600080fd5b505af192505050801561119f57506040513d601f19601f8201168201806040525081019061119c9190612140565b60015b611222573d80600081146111cf576040519150601f19603f3d011682016040523d82523d6000602084013e6111d4565b606091505b5060008151141561121a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112119061206a565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611277565b600190505b949350505050565b61128983836112fd565b61129660008484846110e8565b6112d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112cc9061206a565b60405180910390fd5b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561136d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611364906121b9565b60405180910390fd5b61137681611072565b156113b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113ad90612225565b60405180910390fd5b6113c2600083836110de565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546114129190611dde565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46114d3600083836110e3565b5050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611520816114eb565b811461152b57600080fd5b50565b60008135905061153d81611517565b92915050565b600060208284031215611559576115586114e1565b5b60006115678482850161152e565b91505092915050565b60008115159050919050565b61158581611570565b82525050565b60006020820190506115a0600083018461157c565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156115e05780820151818401526020810190506115c5565b838111156115ef576000848401525b50505050565b6000601f19601f8301169050919050565b6000611611826115a6565b61161b81856115b1565b935061162b8185602086016115c2565b611634816115f5565b840191505092915050565b600060208201905081810360008301526116598184611606565b905092915050565b6000819050919050565b61167481611661565b811461167f57600080fd5b50565b6000813590506116918161166b565b92915050565b6000602082840312156116ad576116ac6114e1565b5b60006116bb84828501611682565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006116ef826116c4565b9050919050565b6116ff816116e4565b82525050565b600060208201905061171a60008301846116f6565b92915050565b611729816116e4565b811461173457600080fd5b50565b60008135905061174681611720565b92915050565b60008060408385031215611763576117626114e1565b5b600061177185828601611737565b925050602061178285828601611682565b9150509250929050565b6000806000606084860312156117a5576117a46114e1565b5b60006117b386828701611737565b93505060206117c486828701611737565b92505060406117d586828701611682565b9150509250925092565b6117e881611661565b82525050565b600060208201905061180360008301846117df565b92915050565b60006020828403121561181f5761181e6114e1565b5b600061182d84828501611737565b91505092915050565b61183f81611570565b811461184a57600080fd5b50565b60008135905061185c81611836565b92915050565b60008060408385031215611879576118786114e1565b5b600061188785828601611737565b92505060206118988582860161184d565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6118e4826115f5565b810181811067ffffffffffffffff82111715611903576119026118ac565b5b80604052505050565b60006119166114d7565b905061192282826118db565b919050565b600067ffffffffffffffff821115611942576119416118ac565b5b61194b826115f5565b9050602081019050919050565b82818337600083830152505050565b600061197a61197584611927565b61190c565b905082815260208101848484011115611996576119956118a7565b5b6119a1848285611958565b509392505050565b600082601f8301126119be576119bd6118a2565b5b81356119ce848260208601611967565b91505092915050565b600080600080608085870312156119f1576119f06114e1565b5b60006119ff87828801611737565b9450506020611a1087828801611737565b9350506040611a2187828801611682565b925050606085013567ffffffffffffffff811115611a4257611a416114e6565b5b611a4e878288016119a9565b91505092959194509250565b60008060408385031215611a7157611a706114e1565b5b6000611a7f85828601611737565b9250506020611a9085828601611737565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611ae157607f821691505b60208210811415611af557611af4611a9a565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000611b576021836115b1565b9150611b6282611afb565b604082019050919050565b60006020820190508181036000830152611b8681611b4a565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b6000611be9603e836115b1565b9150611bf482611b8d565b604082019050919050565b60006020820190508181036000830152611c1881611bdc565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b6000611c7b602e836115b1565b9150611c8682611c1f565b604082019050919050565b60006020820190508181036000830152611caa81611c6e565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000611ce76018836115b1565b9150611cf282611cb1565b602082019050919050565b60006020820190508181036000830152611d1681611cda565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000611d796029836115b1565b9150611d8482611d1d565b604082019050919050565b60006020820190508181036000830152611da881611d6c565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611de982611661565b9150611df483611661565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611e2957611e28611daf565b5b828201905092915050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000611e906025836115b1565b9150611e9b82611e34565b604082019050919050565b60006020820190508181036000830152611ebf81611e83565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611f226024836115b1565b9150611f2d82611ec6565b604082019050919050565b60006020820190508181036000830152611f5181611f15565b9050919050565b6000611f6382611661565b9150611f6e83611661565b925082821015611f8157611f80611daf565b5b828203905092915050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000611fc26019836115b1565b9150611fcd82611f8c565b602082019050919050565b60006020820190508181036000830152611ff181611fb5565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b60006120546032836115b1565b915061205f82611ff8565b604082019050919050565b6000602082019050818103600083015261208381612047565b9050919050565b600081519050919050565b600082825260208201905092915050565b60006120b18261208a565b6120bb8185612095565b93506120cb8185602086016115c2565b6120d4816115f5565b840191505092915050565b60006080820190506120f460008301876116f6565b61210160208301866116f6565b61210e60408301856117df565b818103606083015261212081846120a6565b905095945050505050565b60008151905061213a81611517565b92915050565b600060208284031215612156576121556114e1565b5b60006121648482850161212b565b91505092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b60006121a36020836115b1565b91506121ae8261216d565b602082019050919050565b600060208201905081810360008301526121d281612196565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b600061220f601c836115b1565b915061221a826121d9565b602082019050919050565b6000602082019050818103600083015261223e81612202565b905091905056fe697066733a2f2f62616679626569673337696f6972373673376d67356f6f6265746e636f6a636d3363336878617379643472766964346a71687934676b61686567342f3f66696c656e616d653d302d5055472e6a736f6ea264697066735822122013479af92dde4bbebf998ae2f7ed75452f7457d43e3cb07df35e525223ca5b7764736f6c63430008080033";

type BasicNftConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BasicNftConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BasicNft__factory extends ContractFactory {
  constructor(...args: BasicNftConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BasicNft> {
    return super.deploy(overrides || {}) as Promise<BasicNft>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BasicNft {
    return super.attach(address) as BasicNft;
  }
  override connect(signer: Signer): BasicNft__factory {
    return super.connect(signer) as BasicNft__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BasicNftInterface {
    return new utils.Interface(_abi) as BasicNftInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BasicNft {
    return new Contract(address, _abi, signerOrProvider) as BasicNft;
  }
}
