# AUR Packaging Checklist

- [ ] Make any changes to source files
- [ ] Update `pkgrel`/`pkgver`
- [ ] Run `updpkgsums`
- [ ] Run `makepkg --printsrcinfo > .SRCINFO`
- [ ] Check PKGBUILD with `namcap PKGBUILD`
- [ ] Test install with `makepkg --install --syncdeps`
- [ ] Commit and push
