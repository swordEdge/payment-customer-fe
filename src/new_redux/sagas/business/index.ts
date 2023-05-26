import updateBusinessDetail from './updateBusinessDetail.saga';
import getBusinessProfile from './getBusinessProfile.saga';
import updateBusinessAddress from './updateBusinessAddress.saga';
import getBusinessMembers from './getBusinessMembers.saga';
import getCertainBusinessMember from './getCertainBusinessMember.saga';
import createBusinessMember from './createBusinessMember.saga';
import deleteBusinessMember from './deleteBusinessMember.saga';
import updateBusinessMember from './updateBusinessMember.saga';
import uploadKYBDocuments from './uploadKYBDocuments.saga';

export default [
  getBusinessProfile,
  updateBusinessDetail,
  updateBusinessAddress,
  getBusinessMembers,
  getCertainBusinessMember,
  createBusinessMember,
  deleteBusinessMember,
  updateBusinessMember,
  uploadKYBDocuments
];