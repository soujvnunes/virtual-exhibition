export default function getIconPath(name: string): string {
  return {
    menu: "M22,6H2A2,2,0,0,1,4,4H20a2,2,0,0,1,2,2Zm-1,5H3a1,1,0,0,0-1,1H2a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1h0A1,1,0,0,0,21,11Zm1,7H2a2,2,0,0,0,2,2H20A2,2,0,0,0,22,18Z",
  }[name];
}
