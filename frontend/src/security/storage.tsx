/**
 * Storage permissions.
 *
 * @id - Used to identify the rule on permissions and upload.
 * @folder - Folder where the files will be saved
 * @maxSizeInBytes - Max allowed size in bytes
 * @bypassWritingPermissions - Does not validate if the user has permission to write
 * @publicRead - The file can be publicly accessed via the URL without the need for a signed token
 */
export default class Storage {
  static get values() {
    return {


      studentPicture: {
        id: 'studentPicture',
        folder: 'tenant/:tenantId/student/picture',
        maxSizeInBytes: 100 * 1024 * 1024,
      },



      staffPicture: {
        id: 'staffPicture',
        folder: 'tenant/:tenantId/staff/picture',
        maxSizeInBytes: 100 * 1024 * 1024,
      },















      reportCardReportCardAttachment: {
        id: 'reportCardReportCardAttachment',
        folder: 'tenant/:tenantId/reportCard/reportCardAttachment',
        maxSizeInBytes: 100 * 1024 * 1024,
      },

      studentDocDocAttachment: {
        id: 'studentDocDocAttachment',
        folder: 'tenant/:tenantId/studentDoc/docAttachment',
        maxSizeInBytes: 100 * 1024 * 1024,
      },












      settingsLogos: {
        id: 'settingsLogos',
        folder: 'tenant/:tenantId/settings/logos',
        maxSizeInBytes: 10 * 1024 * 1024,
        publicRead: true,
      },
      settingsBackgroundImages: {
        id: 'settingsBackgroundImages',
        folder:
          'tenant/:tenantId/settings/backgroundImages',
        maxSizeInBytes: 10 * 1024 * 1024,
        publicRead: true,
      },
      userAvatarsProfiles: {
        id: 'userAvatarsProfiles',
        folder: 'user/avatars/profile/:userId',
        maxSizeInBytes: 10 * 1024 * 1024,
        bypassWritingPermissions: true,
        publicRead: true,
      },
    };
  }
}
