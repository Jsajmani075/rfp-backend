RPF_STATUS_CONSTANTS = {
  PENDING: 'pending',
  SUCCESS: 'success',
  CLOSED: 'closed',
  SENT_TO_VENDER: 'sent_to_vender',
  VENDOR_PROPOSAL: 'vendor_proposal',
  AI_RECOMMENDATION: 'ai_recommendation'
},
  VENDOR_TYPE_CONSTANTS = {
    HARDWARE: 'hardware',
    SOFTWARE: 'software',
    SERVICE: 'service'
  },
  RPF_TYPE_CONSTANTS = {
    HARDWARE: 'hardware',
    SOFTWARE: 'software',
    SERVICE: 'service'
  },
  PROPOSAL_STATUS_CONSTANTS = {
    PENDING: 'pending',
    SUCCESS: 'success',
    REJECTED: 'rejected',
    VENDOR_PROPOSAL: 'vendor_proposal',
    AI_RECOMMENDATION: 'ai_recommendation'
  }
CACHE_KEYS = {
  RPF: 'rpf',
  VENDOR: 'vendor',
  PROPOSALS: 'proposals'
}
module.exports = { RPF_STATUS_CONSTANTS, VENDOR_TYPE_CONSTANTS, PROPOSAL_STATUS_CONSTANTS, CACHE_KEYS, RPF_TYPE_CONSTANTS }