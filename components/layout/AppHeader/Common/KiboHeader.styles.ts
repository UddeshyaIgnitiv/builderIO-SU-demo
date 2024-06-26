export const topHeaderStyles = {
  wrapper: {
    display: {
      xs: 'none',
      md: 'flex',
    },
    backgroundColor: 'common.white',
    justifyContent: 'flex-end',
    zIndex: (theme: any) => theme.zIndex.modal,
    paddingBlock: 1,
    paddingInline: 2,
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
}

export const headerActionAreaStyles = {
  wrapper: {
    display: 'flex',
    backgroundColor: 'common.white',
    paddingBlock: { xs: 0, md: 1 },
  },
  container: {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
  },
  searchSuggestionsWrapper: {
    maxWidth: '65%',
    flex: 1,
    display: { xs: 'none', md: 'inline-flex' },
    alignItems: 'center',
    // height: '100%',
  },
  logoWrapper: {
    order: 0,
    top: '-27px',
  },
}

export const kiboHeaderStyles = {
  topBarStyles: {
    zIndex: (theme: any) => theme.zIndex.modal,
    width: '100%',
    backgroundColor: 'common.white',
    minHeight: '57px',
  },
  appBarStyles: {
    zIndex: (theme: any) => theme.zIndex.modal,
    scrollBehavior: 'smooth',
    backgroundColor: 'common.white',
    boxShadow: 'none',
    borderBottomWidth: '1px ',
    borderBottomStyle: ' solid',
    borderBottomColor: 'grey.500',
  },
  logoStyles: {
    // cursor: 'pointer',
    textAlign: 'center',
    position: 'relative',
    margin: 'auto',
    // minHeight: '70px',
    // width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'transparent',
    display: {
      xs: 'none',
      md: 'flex',
    },
    background: 'transparent',
  },
  megaMenuStyles: {
    margin: 'auto',
    color: 'common.black',
    width: '100%',
    minHeight: '50px',
    backgroundColor: 'common.white',
    display: {
      xs: 'none',
      md: 'block',
    },
  },
}
