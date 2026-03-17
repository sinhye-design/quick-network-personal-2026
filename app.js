// ═══════════════════════════════════
// DATA
// ═══════════════════════════════════
const AVATARS = [
  'Bird','Cat','Dog','Jellyfish','Koala','Monkey','Otter','Quokka','Rabbit','Snail','Snowman','Whale'
];
const AV_COLORS = [
  '#4ade80', '#fb923c', '#f87171', '#fde047',
  '#60a5fa', '#c084fc', '#f472b6', '#ffffff'
];

function iconImg(name, size = 24, style = '') {
  const src = (typeof ICON_DATA !== 'undefined' && ICON_DATA[name])
    ? ICON_DATA[name]
    : `icons/Arrow/${name}.svg`;
  return `<img src="${src}" width="${size}" height="${size}"${style ? ` style="${style}"` : ''} alt="${name}">`;
}

const ICON_REPEAT   = "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzYyMDBfMTYyNCkiPgo8cGF0aCBkPSJNMTUuODMzMyA0LjE2NjVMMTcuNSA1LjgzMzE3TTE3LjUgNS44MzMxN0wxNS44MzMzIDcuNDk5ODRNMTcuNSA1LjgzMzE3SDUuODMzMzMiIHN0cm9rZT0iI0ZFRkVGRSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik00LjE2NjY3IDE1LjgzMzVMMi41IDE0LjE2NjhNMi41IDE0LjE2NjhMNC4xNjY2NyAxMi41MDAyTTIuNSAxNC4xNjY4TDE0LjE2NjcgMTQuMTY2OCIgc3Ryb2tlPSIjRkVGRUZFIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIuNTAwMDEgOS4xNjY4M0MyLjUwMDAxIDcuMzI1ODggMy45OTIzOSA1LjgzMzUgNS44MzMzNCA1LjgzMzUiIHN0cm9rZT0iI0ZFRkVGRSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNy41IDEwLjgzMzJDMTcuNSAxMi42NzQxIDE2LjAwNzYgMTQuMTY2NSAxNC4xNjY3IDE0LjE2NjUiIHN0cm9rZT0iI0ZFRkVGRSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfNjIwMF8xNjI0Ij4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=";
const ICON_SCANNER = "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQwMDAwMTEyXzIxNzgpIj4KPHBhdGggZD0iTTE2LjY2NjYgMTBIMy4zMzMyNSIgc3Ryb2tlPSIjRkVGRUZFIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMy4zMzMzIDMuMzMzMDFIMTQuNjY2NkMxNS43NzEyIDMuMzMzMDEgMTYuNjY2NiA0LjIyODQ0IDE2LjY2NjYgNS4zMzMwMVY2LjY2NjM0IiBzdHJva2U9IiNGRUZFRkUiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTYuNjY2NzUgMTYuNjY2NUw1LjMzMzQxIDE2LjY2NjVDNC4yMjg4NCAxNi42NjY1IDMuMzMzNDEgMTUuNzcxMSAzLjMzMzQxIDE0LjY2NjVMMy4zMzM0MiAxMy4zMzMyIiBzdHJva2U9IiNGRUZFRkUiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE2LjY2NjYgMTMuMzMzVjE0LjY2NjNDMTYuNjY2NiAxNS43NzA5IDE1Ljc3MTIgMTYuNjY2MyAxNC42NjY2IDE2LjY2NjNIMTMuMzMzMyIgc3Ryb2tlPSIjRkVGRUZFIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zLjMzMzQxIDYuNjY2NUwzLjMzMzQxIDUuMzMzMTdDMy4zMzM0MiA0LjIyODYgNC4yMjg4NSAzLjMzMzE3IDUuMzMzNDIgMy4zMzMxN0w2LjY2Njc1IDMuMzMzMTciIHN0cm9rZT0iI0ZFRkVGRSIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzQwMDAwMTEyXzIxNzgiPgo8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==";
const GRAPHIC_UP_RIGHT   ="PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9Ijg1IiB2aWV3Qm94PSIwIDAgMTAwIDg1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNDAwMDAxMTJfMjc3MCkiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTg0LjU0MDUgODNDODQuNTQwNSA4NC4xMDQ2IDg1LjQzNiA4NSA4Ni41NDA1IDg1SDEwMC41NDFDMTAxLjY0NSA4NSAxMDIuNTQxIDg0LjEwNDYgMTAyLjU0MSA4M1Y3MEMxMDIuNTQxIDY4Ljg5NTQgMTAzLjQzNiA2OCAxMDQuNTQxIDY4SDExOEMxMTkuMTA1IDY4IDEyMCA2Ny4xMDQ2IDEyMCA2NlY1M0MxMjAgNTEuODk1NCAxMjAuODk1IDUxIDEyMiA1MUgxMzRDMTM1LjEwNSA1MSAxMzYgNTEuODk1NCAxMzYgNTNWNjZDMTM2IDY3LjEwNDYgMTM2Ljg5NSA2OCAxMzggNjhIMTUyQzE1My4xMDUgNjggMTU0IDY3LjEwNDYgMTU0IDY2VjUyQzE1NCA1MC44OTU0IDE1My4xMDUgNTAgMTUyIDUwSDEzOUMxMzcuODk1IDUwIDEzNyA0OS4xMDQ2IDEzNyA0OFYzNkMxMzcgMzQuODk1NCAxMzcuODk1IDM0IDEzOSAzNEgxNTFDMTUyLjEwNSAzNCAxNTMgMzMuMTA0NiAxNTMgMzJWMTdWMTZWLTMzQzE1MyAtMzQuMTA0NiAxNTIuMTA1IC0zNSAxNTEgLTM1SDEyMEg2OUg2OEg1M0M1MS44OTU0IC0zNSA1MSAtMzQuMTA0NiA1MSAtMzNWLTIwQzUxIC0xOC44OTU0IDUwLjEwNDYgLTE4IDQ5IC0xOEgzNy40NzI4QzM2LjM2ODMgLTE4IDM1LjQ3MjggLTE4Ljg5NTQgMzUuNDcyOCAtMjBWLTMyLjYwOTFDMzUuNDcyOCAtMzMuNzEzNiAzNC41Nzc0IC0zNC42MDkxIDMzLjQ3MjggLTM0LjYwOTFIMTkuOTMyMUMxOC44Mjc2IC0zNC42MDkxIDE3LjkzMjEgLTMzLjcxMzYgMTcuOTMyMSAtMzIuNjA5MVYtMTkuMDY4NEMxNy45MzIxIC0xNy45NjM4IDE4LjgyNzYgLTE3LjA2ODQgMTkuOTMyMSAtMTcuMDY4NEgzMkMzMy4xMDQ2IC0xNy4wNjg0IDM0IC0xNi4xNzI5IDM0IC0xNS4wNjg0Vi0yQzM0IC0wLjg5NTQzMiAzNC44OTU0IDAgMzYgMEg0OC41NDA1QzQ5LjY0NTEgMCA1MC41NDA1IDAuODk1NDMyIDUwLjU0MDUgMlYxNEM1MC41NDA1IDE1LjEwNDYgNDkuNjQ1MSAxNiA0OC41NDA1IDE2SDM1LjU0MDVDMzQuNDM2IDE2IDMzLjU0MDUgMTYuODk1NCAzMy41NDA1IDE4VjMyQzMzLjU0MDUgMzMuMTA0NiAzNC40MzYgMzQgMzUuNTQwNSAzNEg0OS41NDA1QzUwLjY0NTEgMzQgNTEuNTQwNSAzMy4xMDQ2IDUxLjU0MDUgMzJWMTlDNTEuNTQwNSAxNy44OTU0IDUyLjQzNiAxNyA1My41NDA1IDE3SDY1LjU0MDVDNjYuNjQ1MSAxNyA2Ny41NDA1IDE3Ljg5NTQgNjcuNTQwNSAxOVYzMkM2Ny41NDA1IDMzLjEwNDYgNjguNDM2IDM0IDY5LjU0MDUgMzRIODNDODQuMTA0NiAzNCA4NSAzNC44OTU0IDg1IDM2VjQ5Qzg1IDUwLjEwNDYgODUuODk1NCA1MSA4NyA1MUgxMDBDMTAxLjEwNSA1MSAxMDIgNTEuODk1NCAxMDIgNTNWNjVDMTAyIDY2LjEwNDYgMTAxLjEwNSA2NyAxMDAgNjdIODYuNTQwNUM4NS40MzYgNjcgODQuNTQwNSA2Ny44OTU0IDg0LjU0MDUgNjlWODNaTTEwNSA1MEMxMDMuODk1IDUwIDEwMyA0OS4xMDQ2IDEwMyA0OFYzNkMxMDMgMzQuODk1NCAxMDMuODk1IDM0IDEwNSAzNEgxMTdDMTE4LjEwNSAzNCAxMTkgMzQuODk1NCAxMTkgMzZWNDhDMTE5IDQ5LjEwNDYgMTE4LjEwNSA1MCAxMTcgNTBIMTA1Wk0xMTggMTZDMTE5LjEwNSAxNiAxMjAgMTUuMTA0NiAxMjAgMTRWMUMxMjAgLTAuMTA0NTY4IDExOS4xMDUgLTEgMTE4IC0xSDEwNS41NDFDMTA0LjQzNiAtMSAxMDMuNTQxIC0wLjEwNDU2OCAxMDMuNTQxIDFWMTRDMTAzLjU0MSAxNS4xMDQ2IDEwNC40MzYgMTYgMTA1LjU0MSAxNkgxMThaTTUyIC0zQzUyIC0xLjg5NTQzIDUyLjg5NTQgLTEgNTQgLTFINjZDNjcuMTA0NiAtMSA2OCAtMS44OTU0MyA2OCAtM1YtMTVDNjggLTE2LjEwNDYgNjcuMTA0NiAtMTcgNjYgLTE3SDU0QzUyLjg5NTQgLTE3IDUyIC0xNi4xMDQ2IDUyIC0xNVYtM1pNODUuNTQwNSAxOUM4NS41NDA1IDE3Ljg5NTQgODYuNDM2IDE3IDg3LjU0MDUgMTdIMTAwQzEwMS4xMDUgMTcgMTAyIDE3Ljg5NTQgMTAyIDE5VjMxQzEwMiAzMi4xMDQ2IDEwMS4xMDUgMzMgMTAwIDMzSDg3LjU0MDVDODYuNDM2IDMzIDg1LjU0MDUgMzIuMTA0NiA4NS41NDA1IDMxVjE5Wk0xOCAxNUMxOCAxNi4xMDQ2IDE3LjEwNDYgMTcgMTYgMTdIMkMwLjg5NTQzMSAxNyAwIDE2LjEwNDYgMCAxNVYyQzAgMC44OTU0MzIgMC44OTU0MyAwIDIgMEgxNkMxNy4xMDQ2IDAgMTggMC44OTU0MzIgMTggMlYxNVoiIGZpbGw9IiM4NTZCRkYiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF80MDAwMDExMl8yNzcwIj4KPHJlY3Qgd2lkdGg9IjEwMiIgaGVpZ2h0PSI4NyIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTIpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==";
const GRAPHIC_UNDER_LEFT = "PHN2ZyB3aWR0aD0iMTE5IiBoZWlnaHQ9IjEwMiIgdmlld0JveD0iMCAwIDExOSAxMDIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF80MDAwMDExMl8yNzUzKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzQuNDU5NSAyQzM0LjQ1OTUgMC44OTU0MzEgMzMuNTY0IDAgMzIuNDU5NSAwSDE4LjQ1OTVDMTcuMzU0OSAwIDE2LjQ1OTUgMC44OTU0MyAxNi40NTk1IDJWMTVDMTYuNDU5NSAxNi4xMDQ2IDE1LjU2NCAxNyAxNC40NTk1IDE3SDFDLTAuMTA0NTY4IDE3IC0xIDE3Ljg5NTQgLTEgMTlWMzJDLTEgMzMuMTA0NiAtMS44OTU0MyAzNCAtMyAzNEgtMTVDLTE2LjEwNDYgMzQgLTE3IDMzLjEwNDYgLTE3IDMyVjE5Qy0xNyAxNy44OTU0IC0xNy44OTU0IDE3IC0xOSAxN0gtMzNDLTM0LjEwNDYgMTcgLTM1IDE3Ljg5NTQgLTM1IDE5VjMzQy0zNSAzNC4xMDQ2IC0zNC4xMDQ2IDM1IC0zMyAzNUgtMjBDLTE4Ljg5NTQgMzUgLTE4IDM1Ljg5NTQgLTE4IDM3VjQ5Qy0xOCA1MC4xMDQ2IC0xOC44OTU0IDUxIC0yMCA1MUgtMzJDLTMzLjEwNDYgNTEgLTM0IDUxLjg5NTQgLTM0IDUzVjY4VjY5VjExOEMtMzQgMTE5LjEwNSAtMzMuMTA0NiAxMjAgLTMyIDEyMEgtMUg1MEg1MUg2NkM2Ny4xMDQ2IDEyMCA2OCAxMTkuMTA1IDY4IDExOFYxMDVDNjggMTAzLjg5NSA2OC44OTU0IDEwMyA3MCAxMDNIODEuNTI3MkM4Mi42MzE3IDEwMyA4My41MjcyIDEwMy44OTUgODMuNTI3MiAxMDVWMTE3LjYwOUM4My41MjcyIDExOC43MTQgODQuNDIyNiAxMTkuNjA5IDg1LjUyNzIgMTE5LjYwOUg5OS4wNjc5QzEwMC4xNzIgMTE5LjYwOSAxMDEuMDY4IDExOC43MTQgMTAxLjA2OCAxMTcuNjA5VjEwNC4wNjhDMTAxLjA2OCAxMDIuOTY0IDEwMC4xNzIgMTAyLjA2OCA5OS4wNjc5IDEwMi4wNjhIODdDODUuODk1NCAxMDIuMDY4IDg1IDEwMS4xNzMgODUgMTAwLjA2OFY4N0M4NSA4NS44OTU0IDg0LjEwNDYgODUgODMgODVINzAuNDU5NUM2OS4zNTQ5IDg1IDY4LjQ1OTUgODQuMTA0NiA2OC40NTk1IDgzVjcxQzY4LjQ1OTUgNjkuODk1NCA2OS4zNTQ5IDY5IDcwLjQ1OTUgNjlIODMuNDU5NUM4NC41NjQgNjkgODUuNDU5NSA2OC4xMDQ2IDg1LjQ1OTUgNjdWNTNDODUuNDU5NSA1MS44OTU0IDg0LjU2NCA1MSA4My40NTk1IDUxSDY5LjQ1OTVDNjguMzU0OSA1MSA2Ny40NTk1IDUxLjg5NTQgNjcuNDU5NSA1M1Y2NkM2Ny40NTk1IDY3LjEwNDYgNjYuNTY0IDY4IDY1LjQ1OTUgNjhINTMuNDU5NUM1Mi4zNTQ5IDY4IDUxLjQ1OTUgNjcuMTA0NiA1MS40NTk1IDY2VjUzQzUxLjQ1OTUgNTEuODk1NCA1MC41NjQgNTEgNDkuNDU5NSA1MUgzNkMzNC44OTU0IDUxIDM0IDUwLjEwNDYgMzQgNDlWMzZDMzQgMzQuODk1NCAzMy4xMDQ2IDM0IDMyIDM0SDE5QzE3Ljg5NTQgMzQgMTcgMzMuMTA0NiAxNyAzMlYyMEMxNyAxOC44OTU0IDE3Ljg5NTQgMTggMTkgMThIMzIuNDU5NUMzMy41NjQgMTggMzQuNDU5NSAxNy4xMDQ2IDM0LjQ1OTUgMTZWMlpNMTQgMzVDMTUuMTA0NiAzNSAxNiAzNS44OTU0IDE2IDM3VjQ5QzE2IDUwLjEwNDYgMTUuMTA0NiA1MSAxNCA1MUgyQzAuODk1NDMyIDUxIDAgNTAuMTA0NiAwIDQ5VjM3QzAgMzUuODk1NCAwLjg5NTQzMiAzNSAyIDM1SDE0Wk0xIDY5Qy0wLjEwNDU2OCA2OSAtMSA2OS44OTU0IC0xIDcxVjg0Qy0xIDg1LjEwNDYgLTAuMTA0NTY4IDg2IDEgODZIMTMuNDU5NUMxNC41NjQgODYgMTUuNDU5NSA4NS4xMDQ2IDE1LjQ1OTUgODRWNzFDMTUuNDU5NSA2OS44OTU0IDE0LjU2NCA2OSAxMy40NTk1IDY5SDFaTTY3IDg4QzY3IDg2Ljg5NTQgNjYuMTA0NiA4NiA2NSA4Nkg1M0M1MS44OTU0IDg2IDUxIDg2Ljg5NTQgNTEgODhWMTAwQzUxIDEwMS4xMDUgNTEuODk1NCAxMDIgNTMgMTAySDY1QzY2LjEwNDYgMTAyIDY3IDEwMS4xMDUgNjcgMTAwVjg4Wk0zMy40NTk1IDY2QzMzLjQ1OTUgNjcuMTA0NiAzMi41NjQgNjggMzEuNDU5NSA2OEgxOUMxNy44OTU0IDY4IDE3IDY3LjEwNDYgMTcgNjZWNTRDMTcgNTIuODk1NCAxNy44OTU0IDUyIDE5IDUySDMxLjQ1OTVDMzIuNTY0IDUyIDMzLjQ1OTUgNTIuODk1NCAzMy40NTk1IDU0VjY2Wk0xMDEgNzBDMTAxIDY4Ljg5NTQgMTAxLjg5NSA2OCAxMDMgNjhIMTE3QzExOC4xMDUgNjggMTE5IDY4Ljg5NTQgMTE5IDcwVjgzQzExOSA4NC4xMDQ2IDExOC4xMDUgODUgMTE3IDg1SDEwM0MxMDEuODk1IDg1IDEwMSA4NC4xMDQ2IDEwMSA4M1Y3MFoiIGZpbGw9IiM4NTZCRkYiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF80MDAwMDExMl8yNzUzIj4KPHJlY3Qgd2lkdGg9IjEyMSIgaGVpZ2h0PSIxMDQiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMikiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K";

function coloredGraphicSrc(base64, color) {
  const svg = atob(base64).replace(/#856BFF/g, color);
  return 'data:image/svg+xml;base64,' + btoa(svg);
}

function avDiv(charIdx, colorIdx, size = 48, innerSize = null) {
  const name = AVATARS[charIdx % AVATARS.length];
  const bg = AV_COLORS[colorIdx % AV_COLORS.length];
  const svgBase64 = typeof SVG_DATA !== 'undefined' && SVG_DATA[name] ? SVG_DATA[name] : `characters/${name}.svg`;
  const imgSize = innerSize ?? (size >= 48 ? Math.round(size * 0.78) : Math.round(size * 0.85));
  return `<div class="av-circle" style="width:${size}px;height:${size}px;background:#1F1F1F;display:flex;align-items:center;justify-content:center;">
    <div style="width:${imgSize}px;height:${imgSize}px;background-color:${bg};-webkit-mask:url('${svgBase64}') no-repeat center/contain;mask:url('${svgBase64}') no-repeat center/contain;"></div>
  </div>`;
}

const PURPOSES_LIST = [
  {id:'info',label:'정보 교류 (업계/기술 트렌드)'},
  {id:'collab',label:'협업/프로젝트 팀원 찾기'},
  {id:'mentor',label:'멘토링/조언 받기'},
  {id:'job',label:'취업/이직'},
  {id:'hire',label:'채용 (정식 채용/인재 발굴)'},
  {id:'invest',label:'투자/비즈니스 파트너 찾기'},
  {id:'network',label:'네트워킹/인맥 확장 (커뮤니티)'},
];

const JOB_CATEGORIES = [
  {id:'sw',label:'소프트웨어 개발',subs:['프론트엔드','백엔드','풀스택','모바일','AI 엔지니어','데이터 엔지니어','네트워크 엔지니어링','시스템 아키텍처','클라우드 엔지니어']},
  {id:'data',label:'데이터 & AI',subs:['데이터 분석','ML 엔지니어','AI 연구']},
  {id:'plan',label:'기획',subs:['서비스 기획','PM','PO']},
  {id:'ops',label:'운영',subs:['CS','운영 기획','커뮤니티']},
  {id:'design',label:'UI/UX 디자인',subs:['UX 디자인','UI 디자인','프로덕트 디자인']},
  {id:'graphic',label:'그래픽 디자인',subs:['브랜드 디자인','모션 그래픽','일러스트']},
  {id:'mkt',label:'마케팅',subs:['그로스','브랜드','콘텐츠']},
  {id:'biz',label:'세일즈 & 비즈니스',subs:['B2B 영업','파트너십','사업개발']},
  {id:'startup',label:'창업 & 경영',subs:['창업가','C-level']},
  {id:'invest',label:'투자 & VC',subs:['VC','엔젤 투자','IR']},
  {id:'edu',label:'연구 & 교육',subs:['연구원','교수','강사']},
];

const INTEREST_LIST = ['소프트웨어 개발','데이터 & AI','클라우드 & 인프라','보안 & 블록체인','핀테크 & 금융','헬스케어 & 바이오','이커머스 & 마케팅','엔터테인먼트 & 미디어','스타트업 & 창업'];

const GROUP_JOB_OPTIONS = ['상관없음','소프트웨어 개발','데이터&AI','클라우드&인프라','기획','세일즈&비즈니스','투자&VC','운영','UI/UX 디자인','그래픽 디자인','마케팅','창업&경영','연구&교육'];
const GROUP_INTEREST_OPTIONS = ['상관없음','소프트웨어 개발','핀테크&금융','클라우드&인프라','엔터테인먼트&미디어','보안&블록체인','데이터&AI','스타트업&창업','헬스케어&바이오','이커머스 & 마케팅'];
const GROUP_PURPOSE_OPTIONS = ['상관없음','멘토링/조언 받기','정보 교류','협업/프로젝트 팀원 찾기','취업/이직','채용','투자/비즈니스 파트너 찾기','네트워킹/인맥 확장'];
const CAREER_LABELS_SHORT = ['학생','신입','주니어','미드레벨','시니어'];

const GROUP_DUMMY = [
  {id:'g1', members:[{avIdx:5,colIdx:2},{avIdx:1,colIdx:3},{avIdx:8,colIdx:0}], maxMembers:4, status:'joined', job:'디자이너', career:'상관없음', interest:'엔터테인먼트&미디어', purpose:'상관없음'},
  {id:'g2', members:[{avIdx:2,colIdx:4},{avIdx:7,colIdx:1}], maxMembers:4, status:'open', job:'상관없음', career:'상관없음', interest:'상관없음', purpose:'멘토링 & 커리어 성장'},
  {id:'g3', members:[{avIdx:0,colIdx:6},{avIdx:3,colIdx:2},{avIdx:9,colIdx:5}], maxMembers:3, status:'networking', job:'개발자 & 엔지니어', career:'미드레벨(4~7년)', interest:'상관없음', purpose:'채용 & 구인'},
  {id:'g4', members:[{avIdx:4,colIdx:7},{avIdx:6,colIdx:1},{avIdx:11,colIdx:3}], maxMembers:4, status:'open', job:'개발자 & 엔지니어', career:'미드레벨(4~7년)', interest:'상관없음', purpose:'채용 & 구인'},
];

const DUMMY = [
  {id:'d1', avIdx:0, colIdx:0, name:'그린버드',role:'프론트엔드 개발자',career:'주니어',company:'스타트업',bio:'웹 개발 3년차입니다. 새로운 사람들과 교류하고 싶어요.',tags:['프론트엔드','풀스택'],interests:['소프트웨어 개발','스타트업 & 창업'],purpose:'collab',status:'협업 파트너 찾아요'},
  {id:'d2', avIdx:1, colIdx:1, name:'오렌지캣',role:'프로덕트 매니저',career:'미드레벨',company:'카카오',bio:'PM 5년차. 좋은 프로덕트를 만드는 법을 공유하고 싶어요.',tags:['서비스 기획','PM'],interests:['스타트업 & 창업','핀테크 & 금융'],purpose:'info',status:'정보 교류 환영'},
  {id:'d3', avIdx:2, colIdx:2, name:'레드독',role:'UX 디자이너',career:'시니어',company:'토스',bio:'핀테크 UX 경력 7년. 멘토링 해드릴 수 있어요.',tags:['UI/UX 디자인'],interests:['핀테크 & 금융','이커머스 & 마케팅'],purpose:'mentor',status:'멘토링 신청 받아요'},
  {id:'d4', avIdx:3, colIdx:3, name:'옐로우젤리',role:'AI 엔지니어',career:'미드레벨',company:'KAIST',bio:'자연어처리 연구 중. 산업계 분들과 얘기 나누고 싶어요.',tags:['AI 엔지니어','데이터 엔지니어'],interests:['데이터 & AI','소프트웨어 개발'],purpose:'info',status:'AI 협업 관심'},
  {id:'d5', avIdx:4, colIdx:4, name:'블루코알라',role:'스타트업 창업자',career:'시니어',company:'핀업',bio:'B2B SaaS 창업 2년차. 투자자분들 찾고 있어요.',tags:['창업 & 경영'],interests:['스타트업 & 창업','핀테크 & 금융'],purpose:'invest',status:'Series A 준비 중'},
  {id:'d6', avIdx:5, colIdx:5, name:'퍼플멍키',role:'백엔드 개발자',career:'시니어',company:'네이버',bio:'Java·Spring 8년차. 대용량 트래픽 경험 공유해 드려요.',tags:['백엔드','시스템 아키텍처'],interests:['소프트웨어 개발','클라우드 & 인프라'],purpose:'mentor',status:'백엔드 멘토링 가능'},
  {id:'d7', avIdx:6, colIdx:6, name:'핑크오터',role:'데이터 분석가',career:'미드레벨',company:'쿠팡',bio:'커머스 데이터 분석 4년차. SQL·Python 잘해요.',tags:['데이터 분석','ML 엔지니어'],interests:['데이터 & AI','이커머스 & 마케팅'],purpose:'info',status:'데이터 인사이트 나눠요'},
  {id:'d8', avIdx:7, colIdx:7, name:'화이트쿼카',role:'그로스 마케터',career:'미드레벨',company:'버킷플레이스',bio:'퍼포먼스 마케팅 5년차. 그로스 전략 공유하고 싶어요.',tags:['그로스','콘텐츠'],interests:['이커머스 & 마케팅','스타트업 & 창업'],purpose:'network',status:'마케터 분들 연결해요'},
  {id:'d9', avIdx:8, colIdx:1, name:'오렌지래빗',role:'클라우드 엔지니어',career:'시니어',company:'AWS',bio:'클라우드 인프라 전문가. 아키텍처 고민 같이 해요.',tags:['클라우드 엔지니어','네트워크 엔지니어링'],interests:['클라우드 & 인프라','소프트웨어 개발'],purpose:'collab',status:'클라우드 프로젝트 모집 중'},
  {id:'d10', avIdx:9, colIdx:2, name:'레드스네일',role:'VC 심사역',career:'시니어',company:'본엔젤스',bio:'시드~시리즈A 스타트업 투자 전문. IR 피드백 드려요.',tags:['VC','엔젤 투자'],interests:['스타트업 & 창업','핀테크 & 금융'],purpose:'invest',status:'투자 미팅 오픈'},
  {id:'d11', avIdx:10, colIdx:4, name:'블루스노맨',role:'iOS 개발자',career:'미드레벨',company:'당근마켓',bio:'SwiftUI 3년차. 모바일 개발자 분들과 교류하고 싶어요.',tags:['모바일','프론트엔드'],interests:['소프트웨어 개발','스타트업 & 창업'],purpose:'network',status:'모바일 개발자 모임'},
  {id:'d12', avIdx:11, colIdx:6, name:'핑크웨일',role:'브랜드 디자이너',career:'주니어',company:'무신사',bio:'패션·라이프스타일 브랜딩 전문. 감각 있는 분과 협업 원해요.',tags:['브랜드 디자인','UI/UX 디자인'],interests:['이커머스 & 마케팅','엔터테인먼트 & 미디어'],purpose:'collab',status:'브랜딩 협업 찾아요'},
  {id:'d13', avIdx:0, colIdx:3, name:'옐로우버드',role:'보안 엔지니어',career:'미드레벨',company:'카카오페이',bio:'핀테크 보안 전문가. 보안 이슈 같이 얘기해요.',tags:['네트워크 엔지니어링','백엔드'],interests:['보안 & 블록체인','핀테크 & 금융'],purpose:'info',status:'보안 스터디 모집'},
  {id:'d14', avIdx:2, colIdx:5, name:'퍼플독',role:'헬스케어 기획자',career:'주니어',company:'눔',bio:'디지털 헬스케어 서비스 기획 2년차. 임팩트 있는 서비스 만들고 싶어요.',tags:['서비스 기획','PO'],interests:['헬스케어 & 바이오','스타트업 & 창업'],purpose:'collab',status:'헬스케어 팀 찾아요'},
];

const MOCK_CHATS = {
  d1:{partnerId:'d1',messages:[
    {id:'m1',from:'d1',text:'안녕하세요! 네트워킹 됐네요 😊',time:'14:30'},
    {id:'m2',from:'me',text:'반갑습니다! 협업 얘기 나눠보고 싶었어요',time:'14:31'},
    {id:'m3',from:'d1',text:'저도요! 잠깐 얘기 나눌 수 있을까요?',time:'14:31'},
  ],unread:1},
};

const MOCK_NOTIFS = [
  {id:'n1',text:'닉네임글자수_123님이 네트워킹을 수락했어요!',time:'방금 전',read:false,chatId:'d1'},
  {id:'n3',type:'timeout',text:'닉네임_123님과의 네트워킹 요청이 만료되었어요',subtext:'프론트엔드 개발자 · 3년차',time:'5분 전',read:true,chatId:null},
];

// 나에게 온 네트워킹 요청 (받은 요청)
const MOCK_INCOMING = [
  {id:'r1', fromId:'d3', time:'방금 전', arrivedAt: Date.now()},
  {id:'r2', fromId:'d6', time:'2분 전', arrivedAt: Date.now() - 2*60*1000},
  {id:'r3', fromId:'d8', time:'5분 전', arrivedAt: Date.now() - 5*60*1000},
];

let S = {
  myId: null,
  sessionCode: 'DEMO',
  people: [],
  chats: {},
  currentChat: null,
  networkingOn: false,
  homeTab: '1v1',
  qrBannerDismissed: false,
  requestedIds: new Set(),
  expandedId: null,
  pendingRequestId: null,
  pendingCancelId: null,
  prevScreen: null,
  regStep: 1,
  regData: {},
  editingId: null,
  filterActive: {jobs:[], interests:[], careerMin:0, careerMax:4, purposes:[]},
  notifEnabled: false,
  incomingRequests: [...MOCK_INCOMING],
  expiredRequests: [],
  notifTab: '1v1',
  groups: [],
  joinedGroupIds: new Set(),
  groupFilter: {jobs:[], interests:[], purposes:[], careerMin:0, careerMax:4},
};

let rAvatar = 0;
let rColor = 0;
let rTags = [];
let rPurpose = null;
let rWant = null;

function load() {
  try {
    const raw = localStorage.getItem('qnw1');
    if (raw) {
      const s = JSON.parse(raw);
      S.myId = s.myId||null;
      S.people = s.people||[];
      S.chats = s.chats||{};
      S.sessionCode = s.sessionCode||'DEMO';
      S.requestedIds = new Set(s.requestedIds||[]);
    }
  } catch(e){}
  if (!S.people.length) S.people = DUMMY.map(d=>({
    avIdx: Math.floor(Math.random() * AVATARS.length),
    colIdx: Math.floor(Math.random() * AV_COLORS.length),
    ...d,
  }));
  if (!Object.keys(S.chats).length) S.chats = JSON.parse(JSON.stringify(MOCK_CHATS));
  if (!S.groups.length) S.groups = GROUP_DUMMY.map(g=>({...g, members:[...g.members]}));
}

function save() {
  localStorage.setItem('qnw1', JSON.stringify({
    myId:S.myId, people:S.people, chats:S.chats,
    sessionCode:S.sessionCode, requestedIds:[...S.requestedIds]
  }));
}

// ═══════════════════════════════════
// SCREEN
// ═══════════════════════════════════
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById('screen-'+id);
  if (el) el.classList.add('active');
}

const MAIN_TABS = {home:'home', notif:'notif', mypage:'mypage'};
function switchMainTab(tab) {
  showScreen(MAIN_TABS[tab]);
  if (tab==='home') renderHomeList();
  if (tab==='notif') renderNotif();
  if (tab==='mypage') renderMypage();
}

// ═══════════════════════════════════
// LANDING
// ═══════════════════════════════════
function simulateQR() { S.sessionCode='NW24'; afterLanding(); }
function joinCode() {
  const v = document.getElementById('code-input').value.trim().toUpperCase();
  if (!v) { toast('세션 코드를 입력해 주세요'); return; }
  S.sessionCode = v; afterLanding();
}
function afterLanding() {
  if (S.myId) { showScreen('home'); renderHomeList(); }
  else showScreen('reg-type');
}

// ═══════════════════════════════════
// REG TYPE
// ═══════════════════════════════════
function selectRegType(type) {
  if (type === 'pre') {
    renderLoginScreen();
    showScreen('login');
  } else {
    startReg();
  }
}

// ═══════════════════════════════════
// LOGIN
// ═══════════════════════════════════
function renderLoginScreen() {
  const body = document.getElementById('login-body');
  body.innerHTML = `
    <div style="text-align:center;padding:32px 20px 8px">
      <div style="font-size:40px;margin-bottom:12px">👋</div>
      <div style="font-size:18px;font-weight:700;margin-bottom:6px">다시 만나서 반가워요!</div>
      <div style="font-size:13px;color:var(--semantic-text-assistive)">사전 등록 정보로 로그인하세요</div>
    </div>
    <div class="form-section" style="margin-top:8px">
      <div class="field"><label>이름 / 닉네임 *</label><input id="login-name" type="text" placeholder="닉네임글자수_123"></div>
      <div class="field"><label>등록 코드</label><input id="login-code" type="text" placeholder="이메일로 받은 코드를 입력하세요"></div>
    </div>
    <button class="btn btn-primary" onclick="submitLogin()">로그인</button>
  `;
}

function submitLogin() {
  const name = document.getElementById('login-name').value.trim();
  if (!name) { toast('이름을 입력해 주세요'); return; }
  const person = {
    id: 'u'+Date.now(),
    avIdx: Math.floor(Math.random()*AVATARS.length),
    colIdx: Math.floor(Math.random()*AV_COLORS.length),
    name, role: '', company: '', bio: '',
    tags: [], purpose: null, status: ''
  };
  S.people.push(person);
  S.myId = person.id;
  save();
  renderZoneEntry();
  showScreen('zone-entry');
}

// ═══════════════════════════════════
// ZONE ENTRY
// ═══════════════════════════════════
function renderZoneEntry() {
  const me = S.people.find(p => p.id === S.myId);
  if (!me) return;
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const body = document.getElementById('zone-entry-body');
  body.innerHTML = `
    <div style="padding:20px 20px 32px">
      <div style="text-align:center;margin-bottom:20px">
        <div style="font-size:14px;color:var(--semantic-text-assistive)">개인 QR코드가 생성됐어요</div>
        <div style="font-size:17px;font-weight:700;margin-top:4px">스태프에게 보여주세요</div>
      </div>
      <div class="qr-card">
        <div class="qr-code-box">${avDiv(me.avIdx||0, me.colIdx||0, 100)}</div>
        <div class="qr-name">${esc(me.name)}</div>
        ${me.role ? `<div class="qr-role">${esc(me.role)}</div>` : ''}
        ${me.status ? `<div class="qr-status">"${esc(me.status)}"</div>` : ''}
      </div>
      ${isIOS ? `
      <div class="add-home-tip">
        <div class="add-home-tip-title">📲 홈 화면에 바로가기 추가</div>
        <div class="add-home-tip-desc">Safari 하단 <strong>공유 버튼</strong>을 누른 뒤 <strong>"홈 화면에 추가"</strong>를 눌러 앱처럼 사용하세요!</div>
      </div>
      ` : ''}
      <button class="btn btn-primary" style="width:100%;margin-top:16px" onclick="enterHome()">네트워킹 존 입장하기 →</button>
    </div>
  `;
}

function enterHome() {
  showScreen('home');
  renderHomeList();
  toast('네트워킹 존에 입장했어요! 🎉');
}

// ═══════════════════════════════════
// REGISTER
// ═══════════════════════════════════
function regGoBack() {
  if (S.editingId) showScreen('home');
  else showScreen('reg-type');
}

function startReg(editing) {
  S.regStep = 1; S.editingId = editing||null;
  if (editing) {
    const p = S.people.find(x=>x.id===editing);
    if (p) {
      S.regData = {name:p.name,role:p.role,company:p.company||'',bio:p.bio,phone:p.phone||'',email:p.email||'',link:p.link||''};
      rAvatar = p.avIdx||0; rColor = p.colIdx||0; rTags=[...(p.tags||[])]; rPurpose=p.purpose||null; rWant=p.want||null;
    }
  } else {
    S.regData={}; rAvatar=0; rColor=0; rTags=[]; rPurpose=null; rWant=null;
  }
  const backBtn = document.getElementById('reg-back-btn');
  const logo = document.getElementById('reg-logo');
  backBtn.style.display = '';
  logo.style.display = 'none';
  buildRegStep(); showScreen('register');
}

function buildRegStep() {
  const step = S.regStep;
  [1,2,3].forEach(i => document.getElementById('pd'+i).classList.toggle('done',i<=step));
  const titles=['기본 정보','관심사 & 목적','오늘의 상태'];
  document.getElementById('reg-title').textContent = S.editingId?'프로필 수정':titles[step-1];
  const body = document.getElementById('reg-body');

  if (step===1) {
    body.innerHTML=`
      <div class="form-section preview-section" style="display:flex; justify-content:center; padding: 10px 0 20px;">
        <div id="step1-preview"></div>
      </div>
      <div class="form-section">
        <div class="form-section-title">아바타</div>
        <div class="avatar-row" id="av-row" style="margin-bottom:16px;"></div>
        <div class="form-section-title">배경 색상</div>
        <div class="avatar-row" id="color-row"></div>
      </div>
      <div class="form-section">
        <div class="form-section-title">기본 정보</div>
        <div class="field"><label>이름 / 닉네임 *</label><input id="r-name" type="text" placeholder="닉네임글자수_123" value="${esc(S.regData.name||'')}"></div>
        <div class="field"><label>직업 / 역할 *</label><input id="r-role" type="text" placeholder="프론트엔드 개발자" value="${esc(S.regData.role||'')}"></div>
        <div class="field"><label>소속 *</label><input id="r-company" type="text" placeholder="스타트업" value="${esc(S.regData.company||'')}"></div>
        <div class="field"><label>한줄 소개</label><textarea id="r-bio" placeholder="간단하게 자신을 소개해 주세요">${esc(S.regData.bio||'안녕하세요.')}</textarea></div>
      </div>
      <div class="form-section">
        <div class="form-section-title">연락처</div>
        <div class="field"><label>전화번호</label><input id="r-phone" type="tel" placeholder="010-0000-0000" value="${esc(S.regData.phone||'')}"></div>
        <div class="field"><label>이메일</label><input id="r-email" type="email" placeholder="hello@example.com" value="${esc(S.regData.email||'')}"></div>
        <div class="field"><label>링크드인 / 링크</label><input id="r-link" type="url" placeholder="https://" value="${esc(S.regData.link||'')}"></div>
      </div>
      <button class="btn btn-primary" onclick="regStep1Next()">다음 →</button>
    `;
    buildAvatarPicker();
    updateStep1Preview();
  } else if (step===2) {
    body.innerHTML=`
      <div class="form-section">
        <div class="form-section-title">관심사 태그 <span style="color:var(--semantic-text-assistive);font-weight:400;font-size:11px">(입력 후 Enter)</span></div>
        <div class="tag-input-wrap" id="tag-wrap"><input id="tag-in" type="text" placeholder="React, AI, 스타트업…"></div>
      </div>
      <div class="form-section">
        <div class="form-section-title">네트워킹 참여 목적</div>
        <div class="chip-row" id="purpose-row"></div>
      </div>
      <div style="display:flex;gap:10px">
        <button class="btn btn-outline" style="flex:1" onclick="S.regStep=1;buildRegStep()">← 이전</button>
        <button class="btn btn-primary" style="flex:2" onclick="regStep2Next()">다음 →</button>
      </div>
    `;
    buildTagInput(); buildChips('purpose-row',PURPOSES_LIST,()=>rPurpose,v=>rPurpose=v);
  } else {
    body.innerHTML=`
      <div class="form-section">
        <div class="form-section-title">오늘의 상태 메시지</div>
        <p style="font-size:13px;color:var(--semantic-text-assistive);margin-bottom:14px;line-height:1.6">지금 무엇을 찾고 있나요? 다른 참여자에게 표시돼요.</p>
        <div class="field"><input id="r-status" type="text" placeholder="예: CTO 찾고 있어요" value="${esc(S.regData.status||'')}" maxlength="30"></div>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:8px" id="status-sugg"></div>
      </div>
      <div class="form-section">
        <div class="form-section-title">카드 미리보기</div>
        <div class="p-card" style="margin-bottom:0">
          <div class="p-card-top" style="cursor:default">
            <div class="p-card-left">
              ${avDiv(rAvatar, rColor, 48)}
              <div class="p-card-info">
                <div class="p-card-name">${esc(S.regData.name||'닉네임')}</div>
              </div>
            </div>
            <img src="icons/Arrow/Arrow Right 11.svg" width="24" height="24" class="p-card-arrow">
          </div>
          <div class="p-card-tag-row"><img class="bm" src="icons/Icon_Bookmark_filled.svg"><span>${PURPOSES_LIST.find(p=>p.id===rPurpose)?.label||'목적 미선택'}</span></div>
        </div>
      </div>
      <div style="display:flex;gap:10px">
        <button class="btn btn-outline" style="flex:1" onclick="S.regStep=2;buildRegStep()">← 이전</button>
        <button class="btn btn-primary" style="flex:2" onclick="submitReg()">🎉 ${S.editingId?'수정 완료':'등록 완료'}</button>
      </div>
    `;
    const suggs=['CTO 찾고 있어요','Series A 준비 중','협업 파트너 구해요','멘토 찾습니다','오픈 마인드'];
    const sg=document.getElementById('status-sugg');
    suggs.forEach(s=>{
      const b=document.createElement('button');
      b.className='chip';b.style.fontSize='12px';b.textContent=s;
      b.onclick=()=>{document.getElementById('r-status').value=s;};
      sg.appendChild(b);
    });
  }
  body.scrollTop=0;
}

function buildAvatarPicker() {
  const row=document.getElementById('av-row');
  row.innerHTML='';
  AVATARS.forEach((name,i)=>{
    const d=document.createElement('div');
    d.className='avatar-opt'+(i===rAvatar?' selected':'');
    const svgBase64 = typeof SVG_DATA!=='undefined'&&SVG_DATA[name]?SVG_DATA[name]:`characters/${name}.svg`;
    d.innerHTML=`<div class="av-circle" style="width:100%;height:100%;background:#1F1F1F;">
      <div style="width:100%;height:100%;background-color:#ffffff;-webkit-mask:url('${svgBase64}') no-repeat center/85%;mask:url('${svgBase64}') no-repeat center/85%;"></div>
    </div>`;
    d.onclick=()=>{rAvatar=i;document.getElementById('av-row').querySelectorAll('.avatar-opt').forEach(x=>x.classList.remove('selected'));d.classList.add('selected');updateStep1Preview();};
    row.appendChild(d);
  });
  const crow=document.getElementById('color-row');
  if(!crow) return;
  crow.innerHTML='';
  AV_COLORS.forEach((bg,i)=>{
    const d=document.createElement('div');
    d.className='avatar-opt'+(i===rColor?' selected':'');
    d.style.cssText = `width:100%;height:100%;border-radius:50%;background:${bg};cursor:pointer;border:3px solid transparent;`;
    if(i===rColor) d.style.borderColor='var(--semantic-fill-primary)';
    d.onclick=()=>{
      rColor=i;
      document.getElementById('color-row').querySelectorAll('.avatar-opt').forEach(x=>x.style.borderColor='transparent');
      d.style.borderColor='var(--semantic-fill-primary)';
      buildAvatarPicker(); // 캐릭터 색상 즉시 업데이트
      updateStep1Preview(); // 미리보기 창 업데이트 (전체 폼 렌더링 X)
    };
    crow.appendChild(d);
  });
}

function updateStep1Preview() {
  const preview = document.getElementById('step1-preview');
  if (preview) {
    preview.innerHTML = avDiv(rAvatar, rColor, 88);
  }
}

function buildTagInput() {
  renderTagChips();
  const inp=document.getElementById('tag-in');
  inp.onkeydown=e=>{
    if(e.key==='Enter'||e.key===','){
      e.preventDefault();
      const v=inp.value.trim().replace(/,$/,'');
      if(v&&!rTags.includes(v)){rTags.push(v);renderTagChips();}
      inp.value='';
    }
    if(e.key==='Backspace'&&!inp.value&&rTags.length){rTags.pop();renderTagChips();}
  };
  document.getElementById('tag-wrap').onclick=e=>{if(e.target.id==='tag-wrap')inp.focus();};
}

function renderTagChips() {
  const wrap=document.getElementById('tag-wrap');
  const inp=document.getElementById('tag-in');
  if(!wrap)return;
  wrap.innerHTML='';
  rTags.forEach((t,i)=>{
    const chip=document.createElement('span');
    chip.className='tag-chip';
    chip.innerHTML=`${esc(t)}<span class="rm">×</span>`;
    chip.querySelector('.rm').onclick=()=>{rTags.splice(i,1);renderTagChips();};
    wrap.appendChild(chip);
  });
  wrap.appendChild(inp);
}

function buildChips(cid,items,getVal,setVal) {
  const c=document.getElementById(cid);
  items.forEach(item=>{
    const btn=document.createElement('button');
    btn.className='chip'+(getVal()===item.id?' selected':'');
    btn.innerHTML=`${item.icon ? item.icon + ' ' : ''}${item.label}`;
    btn.onclick=()=>{setVal(item.id);c.querySelectorAll('.chip').forEach(x=>x.classList.remove('selected'));btn.classList.add('selected');};
    c.appendChild(btn);
  });
}

function regStep1Next() {
  const name=document.getElementById('r-name').value.trim();
  const role=document.getElementById('r-role').value.trim();
  const company=document.getElementById('r-company').value.trim();
  const bio=document.getElementById('r-bio').value.trim()||'안녕하세요';
  if(!name||!role||!company){toast('이름, 역할, 소속은 필수예요');return;}
  S.regData={name,role,bio,company,phone:document.getElementById('r-phone').value.trim(),email:document.getElementById('r-email').value.trim(),link:document.getElementById('r-link').value.trim()};
  S.regStep=2;buildRegStep();
}

function regStep2Next() {
  if(!rPurpose){toast('네트워킹 목적을 선택해 주세요');return;}
  S.regStep=3;buildRegStep();
}

function submitReg() {
  const status=document.getElementById('r-status').value.trim();
  const person={id:S.editingId||('u'+Date.now()),avIdx:rAvatar,colIdx:rColor,...S.regData,tags:[...rTags],purpose:rPurpose,want:rWant,status};
  if(S.editingId){
    const idx=S.people.findIndex(p=>p.id===S.editingId);
    if(idx!==-1)S.people[idx]=person;
    toast('프로필이 수정됐어요 ✓');
  }else{
    S.people.push(person);S.myId=person.id;
    toast('등록 완료! 환영해요 🎉');
  }
  const wasEditing = !!S.editingId;
  S.editingId=null;save();
  if(wasEditing) { showScreen('home');renderHomeList(); }
  else { renderZoneEntry(); showScreen('zone-entry'); }
}

// ═══════════════════════════════════
// HOME
// ═══════════════════════════════════
function toggleNetworking() {
  S.networkingOn = !S.networkingOn;
  document.getElementById('main-toggle').classList.toggle('on', S.networkingOn);
  const overlay = document.getElementById('networking-off-overlay');
  if (S.networkingOn) {
    overlay.classList.add('hidden');
    toast('네트워킹 ON!', '네트워킹을 원하지 않는다면 스위치를 끌 수 있어요');
  } else {
    overlay.classList.remove('hidden');
  }
}

function dismissQRBanner() {
  S.qrBannerDismissed = true;
  document.getElementById('qr-banner').style.display = 'none';
}

function switchHomeTab(tab) {
  S.homeTab = tab;
  document.getElementById('tab-1v1').classList.toggle('active', tab==='1v1');
  document.getElementById('tab-group').classList.toggle('active', tab==='group');
  const gcf = document.getElementById('group-create-footer');
  if (gcf) gcf.style.display = tab==='group' ? 'block' : 'none';
  const filterBtn = document.getElementById('filter-btn');
  if (filterBtn) filterBtn.onclick = tab==='group' ? openGroupFilter : openFilter;
  renderHomeList();
}

function renderHomeList() {
  if (S.homeTab === 'group') { renderGroupList(); return; }
  const el = document.getElementById('home-list');
  if (!el) return;
  const list = S.people.filter(p => p.id !== S.myId);
  if (!list.length) {
    el.innerHTML=`<div class="empty-state"><p>아직 참여자가 없어요.<br>조금만 기다리면 새로운 만남이 시작될 거예요!</p></div>`;
    return;
  }
  el.innerHTML='';
  list.forEach(p => {
    const purposeObj = PURPOSES_LIST.find(x=>x.id===p.purpose);
    const isRequested = S.requestedIds.has(p.id);
    const avIdx = p.avIdx||0;
    const purposeShort = purposeObj ? purposeObj.label.replace(/ \(.+\)$/,'') : '';

    const card = document.createElement('div');
    card.className = 'p-card'+(isRequested?' requested':'');
    card.id = 'pcard-'+p.id;
    card.innerHTML = `
      <div class="p-card-top" onclick="toggleCard('${p.id}')">
        <div class="p-card-left">
          ${avDiv(avIdx, p.colIdx||0, 48)}
          <div class="p-card-info">
            <div class="p-card-name-row">
              <div class="p-card-name">${esc(p.name)}</div>
              ${isRequested ? '' : `<img src="icons/Arrow/Arrow Right 11.svg" width="24" height="24" class="p-card-arrow">`}
            </div>
          </div>
        </div>
        ${isRequested
          ? `<button class="net-cancel-pill" onclick="openCancelModal('${p.id}',event)">네트워킹 취소</button>`
          : ''
        }
      </div>
      ${purposeObj ? `<div class="p-card-tag-row"><img class="bm" src="icons/Icon_Bookmark_filled.svg"><span>${esc(purposeShort)}</span></div>` : ''}
    `;
    el.appendChild(card);
  });

  const overlay = document.getElementById('networking-off-overlay');
  if (overlay) overlay.classList.toggle('hidden', S.networkingOn);
}

function toggleCard(pid) {
  if (!S.networkingOn) { toast('스위치를 켜야 참여할 수 있어요'); return; }
  openProfilePopup(pid);
}

function openProfilePopup(pid) {
  const p = S.people.find(x => x.id === pid);
  if (!p) return;
  const isRequested = S.requestedIds.has(pid);
  const avIdx = p.avIdx||0;
  const purposeObj = PURPOSES_LIST.find(x => x.id === p.purpose);

  document.getElementById('profile-popup-header').innerHTML = `
    <div class="pp-avatar">${avDiv(avIdx, p.colIdx||0, 64, 60)}</div>
    <div class="pp-info">
      <div class="pp-name">${esc(p.name)}</div>
      ${(p.role||p.career) ? `<div class="pp-meta">${[p.role,p.career].filter(Boolean).map(esc).join(' | ')}</div>` : ''}
      ${p.company ? `<div class="pp-meta">${esc(p.company)}</div>` : ''}
    </div>
  `;

  const chips = p.interests||p.tags||[];
  const chipsEl = document.getElementById('profile-popup-chips');
  chipsEl.innerHTML = chips.length
    ? chips.map(t => `<span class="tag">${esc(t)}</span>`).join('')
    : '';
  chipsEl.style.display = chips.length ? 'flex' : 'none';

  const purposeEl = document.getElementById('profile-popup-purpose');
  const purposeShortLabel = purposeObj ? purposeObj.label.replace(/ \(.+\)$/, '') : '';
  purposeEl.innerHTML = purposeObj
    ? `<img class="bm" src="icons/Icon_Bookmark_filled.svg"><span>${esc(purposeShortLabel)}</span>`
    : '';
  purposeEl.style.display = purposeObj ? 'flex' : 'none';
  purposeEl.style.marginTop = chips.length ? '0' : '16px';

  document.getElementById('profile-popup-footer').innerHTML = !isRequested
    ? `<button class="net-request-btn" onclick="closeProfilePopup();openNetModal('${pid}')">네트워킹 신청</button>`
    : `<button class="net-request-btn net-cancel-btn" onclick="closeProfilePopup();openCancelModal('${pid}')">네트워킹 취소</button>`;

  document.getElementById('profile-popup').classList.remove('hidden');
}

function closeProfilePopup() {
  document.getElementById('profile-popup').classList.add('hidden');
}

function openNetModal(pid, e) {
  if (e) e.stopPropagation();
  const p = S.people.find(x=>x.id===pid);
  if (!p) return;
  S.pendingRequestId = pid;
  document.getElementById('modal-title').innerHTML = `<b>${esc(p.name)}</b>님에게<br>네트워킹을 신청할까요?`;
  document.getElementById('net-modal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('net-modal').classList.add('hidden');
  S.pendingRequestId = null;
}

function confirmNetRequest() {
  if (!S.pendingRequestId) return;
  const pid = S.pendingRequestId;
  S.requestedIds.add(pid);
  save();
  closeModal();
  renderHomeList();
  openSentModal(pid);
}

function openSentModal(pid) {
  const descEl = document.getElementById('sent-modal-desc');
  const actionsEl = document.getElementById('sent-modal-actions');

  if (S.notifEnabled) {
    // HO02_M03 — 알림 켜져있는 경우
    descEl.textContent = '요청 수락 시 알림으로 알려드릴게요.';
    actionsEl.innerHTML = `<button class="modal-yes" style="flex:1" onclick="closeSentModal()">확인</button>`;
  } else {
    // HO02_M04 — 알림 꺼져있는 경우
    descEl.textContent = '요청이 수락되면 알림으로 알려드릴게요.';
    actionsEl.innerHTML = `
      <button class="modal-no" onclick="closeSentModal()">괜찮아요</button>
      <button class="modal-yes" onclick="enableNotif()">알림받기</button>
    `;
  }

  document.getElementById('net-sent-modal').classList.remove('hidden');

  // 4초 후 자동 매칭 시뮬레이션
  setTimeout(() => {
    createChatIfNeeded(pid);
    document.getElementById('net-sent-modal').classList.add('hidden');
    toast('매칭됐어요! 채팅을 시작해 보세요 🎉');
    const nb2 = document.getElementById('notif-badge'); if (nb2) { nb2.style.display = 'flex'; nb2.textContent = '1'; }
  }, 4000);
}

function closeSentModal() {
  document.getElementById('net-sent-modal').classList.add('hidden');
}

function enableNotif() {
  S.notifEnabled = true;
  closeSentModal();
  toast('알림이 설정됐어요 🔔');
}

function openCancelModal(pid, e) {
  if (e) e.stopPropagation();
  S.pendingCancelId = pid;
  document.getElementById('net-cancel-modal').classList.remove('hidden');
}

function closeCancelModal() {
  document.getElementById('net-cancel-modal').classList.add('hidden');
  S.pendingCancelId = null;
}

function confirmCancelRequest() {
  const pid = S.pendingCancelId;
  if (!pid) return;
  S.requestedIds.delete(pid);
  save();
  closeCancelModal();
  renderHomeList();
  toast('네트워킹 신청을 취소했어요');
}

// ═══════════════════════════════════
// GROUP LIST
// ═══════════════════════════════════
function renderGroupList() {
  const el = document.getElementById('home-list');
  if (!el) return;
  const f = S.groupFilter;
  const list = S.groups.filter(g => {
    if (f.jobs.length && !f.jobs.includes('상관없음') && !f.jobs.some(j => g.job.includes(j))) return false;
    if (f.interests.length && !f.interests.includes('상관없음') && !f.interests.some(i => g.interest.includes(i))) return false;
    if (f.purposes.length && !f.purposes.includes('상관없음') && !f.purposes.some(p => g.purpose.includes(p))) return false;
    return true;
  });

  el.innerHTML = '';
  if (!list.length) {
    el.innerHTML = `<div class="empty-state"><p>조건에 맞는 그룹이 없어요.<br>필터를 바꾸거나 새 그룹을 만들어보세요!</p></div>`;
    return;
  }
  list.forEach(g => {
    const stMap = {
      joined:     {label:'참여중',         cls:'grp-st-joined'},
      open:       {label:'참여 가능',       cls:'grp-st-open'},
      networking: {label:'네트워킹 진행중', cls:'grp-st-net'},
      full:       {label:'인원 마감',       cls:'grp-st-full'},
    };
    const st = stMap[g.status] || stMap.open;
    const isJoined = S.joinedGroupIds.has(g.id);
    const canJoin  = g.status === 'open' && !isJoined;

    const avatarsHtml = g.members.map(m => avDiv(m.avIdx, m.colIdx, 30, 22)).join('');

    const card = document.createElement('div');
    card.className = 'group-card';
    card.innerHTML = `
      <div class="grp-card-top">
        <div class="grp-status-badge ${st.cls}"><span class="grp-dot"></span>${st.label}</div>
        <div class="grp-av-row">
          ${avatarsHtml}
          ${canJoin ? `<button class="grp-join-btn" onclick="joinGroup('${g.id}',event)">+</button>` : ''}
        </div>
      </div>
      <div class="grp-info-rows">
        <div class="grp-info-row"><span class="gi gi-job"></span><span class="gi-lbl">직무</span><span class="gi-val">${esc(g.job)}</span></div>
        <div class="grp-info-row"><span class="gi gi-career"></span><span class="gi-lbl">경력</span><span class="gi-val">${esc(g.career)}</span></div>
        <div class="grp-info-row"><span class="gi gi-interest"></span><span class="gi-lbl">관심분야</span><span class="gi-val">${esc(g.interest)}</span></div>
        <div class="grp-info-row"><span class="gi gi-purpose"></span><span class="gi-lbl">참여목적</span><span class="gi-val">${esc(g.purpose)}</span></div>
      </div>
    `;
    el.appendChild(card);
  });
}

function joinGroup(id, e) {
  if (e) e.stopPropagation();
  if (!S.networkingOn) { toast('네트워킹 스위치를 ON해야 참여할 수 있어요'); return; }
  const g = S.groups.find(x => x.id === id);
  if (!g || g.status !== 'open') return;
  const me = S.people.find(p => p.id === S.myId);
  g.members.push({avIdx: me ? me.avIdx||0 : 0, colIdx: me ? me.colIdx||0 : 0});
  S.joinedGroupIds.add(id);
  g.status = g.members.length >= g.maxMembers ? 'full' : 'joined';
  renderGroupList();
  toast('그룹에 참여했어요! 🎉');
}

// ═══════════════════════════════════
// GROUP CREATE
// ═══════════════════════════════════
let gcJobs = [], gcInterests = [], gcPurposes = [], gcCareerMin = 0, gcCareerMax = 4;

function openGroupCreate() {
  gcJobs = []; gcInterests = []; gcPurposes = []; gcCareerMin = 0; gcCareerMax = 4;
  buildGroupCreateForm();
  showScreen('group-create');
}

function buildGroupCreateForm() {
  const body = document.getElementById('group-create-body');
  body.innerHTML = `
    <div style="padding:24px 20px 120px">
      <h2 style="font-size:20px;font-weight:800;margin-bottom:8px">이런 멤버를 만나고 싶어요</h2>
      <div class="grp-create-warning">⚠️ 선택한 기준이 표시되지만, 꼭 일치하는 분만 들어오는 건 아니에요!</div>
      <div class="form-section" style="margin-top:28px">
        <div class="form-section-title">직무/직책</div>
        <div class="grp-chip-grid" id="gc-jobs"></div>
      </div>
      <div class="form-section">
        <div class="form-section-title">관심 분야</div>
        <div class="grp-chip-grid" id="gc-interests"></div>
      </div>
      <div class="form-section">
        <div class="form-section-title">경력</div>
        <div class="dual-range-wrap">
          <div class="dual-range-track"><div class="dual-range-fill" id="gc-career-fill"></div></div>
          <input type="range" class="range-thumb" id="gc-career-min" min="0" max="4" value="0" oninput="updateGcRange()">
          <input type="range" class="range-thumb" id="gc-career-max" min="0" max="4" value="4" oninput="updateGcRange()">
        </div>
        <div class="range-labels">
          <span class="range-label active" data-i="0">학생<br><span class="range-sub">-</span></span>
          <span class="range-label active" data-i="1">신입<br><span class="range-sub">1년 이하</span></span>
          <span class="range-label active" data-i="2">주니어<br><span class="range-sub">1~3년</span></span>
          <span class="range-label active" data-i="3">미드레벨<br><span class="range-sub">4~9년</span></span>
          <span class="range-label active" data-i="4">시니어<br><span class="range-sub">10년 이상</span></span>
        </div>
      </div>
      <div class="form-section">
        <div class="form-section-title">네트워킹 참여 목적</div>
        <div class="grp-chip-grid" id="gc-purposes"></div>
      </div>
    </div>
  `;
  buildGrpChips('gc-jobs',      GROUP_JOB_OPTIONS,      () => gcJobs,      gcJobs);
  buildGrpChips('gc-interests', GROUP_INTEREST_OPTIONS, () => gcInterests, gcInterests);
  buildGrpChips('gc-purposes',  GROUP_PURPOSE_OPTIONS,  () => gcPurposes,  gcPurposes);
  updateGcRange();
}

function buildGrpChips(containerId, options, getArr, arr) {
  const c = document.getElementById(containerId);
  if (!c) return;
  c.innerHTML = '';
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'grp-chip' + (arr.includes(opt) ? ' selected' : '');
    btn.textContent = opt;
    btn.onclick = () => {
      if (opt === '상관없음') {
        arr.length = 0;
      } else {
        const idx = arr.indexOf('상관없음');
        if (idx !== -1) arr.splice(idx, 1);
        const i = arr.indexOf(opt);
        if (i === -1) arr.push(opt); else arr.splice(i, 1);
      }
      buildGrpChips(containerId, options, getArr, arr);
    };
    c.appendChild(btn);
  });
}

function updateGcRange() {
  const minEl = document.getElementById('gc-career-min');
  const maxEl = document.getElementById('gc-career-max');
  const fill  = document.getElementById('gc-career-fill');
  if (!minEl || !maxEl || !fill) return;
  let minV = parseInt(minEl.value), maxV = parseInt(maxEl.value);
  if (minV > maxV) { minEl.value = maxV; minV = maxV; }
  if (maxV < minV) { maxEl.value = minV; maxV = minV; }
  fill.style.left  = (minV * 25) + '%';
  fill.style.width = ((maxV - minV) * 25) + '%';
  document.querySelectorAll('#group-create-body .range-label').forEach((l, i) => {
    l.classList.toggle('active', i >= minV && i <= maxV);
  });
  gcCareerMin = minV; gcCareerMax = maxV;
}

function submitGroupCreate() {
  const careerLabel = gcCareerMin === 0 && gcCareerMax === 4
    ? '상관없음'
    : gcCareerMin === gcCareerMax
      ? CAREER_LABELS_SHORT[gcCareerMin]
      : `${CAREER_LABELS_SHORT[gcCareerMin]}~${CAREER_LABELS_SHORT[gcCareerMax]}`;
  const me = S.people.find(p => p.id === S.myId);
  const newGroup = {
    id: 'g' + Date.now(),
    members: me ? [{avIdx: me.avIdx||0, colIdx: me.colIdx||0}] : [],
    maxMembers: 4,
    status: 'open',
    job:      gcJobs.length      ? gcJobs.join(', ')      : '상관없음',
    career:   careerLabel,
    interest: gcInterests.length ? gcInterests.join(', ') : '상관없음',
    purpose:  gcPurposes.length  ? gcPurposes.join(', ')  : '상관없음',
  };
  S.groups.unshift(newGroup);
  S.joinedGroupIds.add(newGroup.id);
  showScreen('home');
  renderHomeList();
  toast('그룹이 만들어졌어요! 🎉');
}

// ═══════════════════════════════════
// GROUP FILTER
// ═══════════════════════════════════
function openGroupFilter() {
  buildGroupFilterSheet();
  const overlay = document.getElementById('filter-group-sheet');
  overlay.classList.remove('hidden');
  initSheetDrag(overlay, overlay.querySelector('.sheet'), closeGroupFilter);
}
function closeGroupFilter() { document.getElementById('filter-group-sheet').classList.add('hidden'); }
function resetGroupFilter() { S.groupFilter = {jobs:[], interests:[], purposes:[], careerMin:0, careerMax:4}; buildGroupFilterSheet(); }

function buildGroupFilterSheet() {
  const body = document.getElementById('filter-group-body');
  const f = S.groupFilter;
  body.innerHTML = `
    <div class="filter-section">
      <div class="filter-section-title">직무/직책 <span class="filter-count-badge" id="gfc-job">${f.jobs.length}/${GROUP_JOB_OPTIONS.length}</span></div>
      <div class="grp-chip-grid" id="gf-jobs"></div>
    </div>
    <div class="filter-section">
      <div class="filter-section-title">관심분야 <span class="filter-count-badge" id="gfc-int">${f.interests.length}/${GROUP_INTEREST_OPTIONS.length}</span></div>
      <div class="grp-chip-grid" id="gf-interests"></div>
    </div>
    <div class="filter-section">
      <div class="filter-section-title">경력</div>
      <div class="dual-range-wrap">
        <div class="dual-range-track"><div class="dual-range-fill" id="gf-career-fill"></div></div>
        <input type="range" class="range-thumb" id="gf-career-min" min="0" max="4" value="${f.careerMin}" oninput="updateGfRange()">
        <input type="range" class="range-thumb" id="gf-career-max" min="0" max="4" value="${f.careerMax}" oninput="updateGfRange()">
      </div>
      <div class="range-labels">
        <span class="range-label" data-i="0">학생<br><span class="range-sub">-</span></span>
        <span class="range-label" data-i="1">신입<br><span class="range-sub">1년 이하</span></span>
        <span class="range-label" data-i="2">주니어<br><span class="range-sub">1~3년</span></span>
        <span class="range-label" data-i="3">미드레벨<br><span class="range-sub">4~9년</span></span>
        <span class="range-label" data-i="4">시니어<br><span class="range-sub">10년 이상</span></span>
      </div>
    </div>
    <div class="filter-section">
      <div class="filter-section-title">참여 목적 <span class="filter-count-badge" id="gfc-pur">${f.purposes.length}/${GROUP_PURPOSE_OPTIONS.length}</span></div>
      <div class="grp-chip-grid" id="gf-purposes"></div>
    </div>
  `;
  buildGrpChips('gf-jobs',      GROUP_JOB_OPTIONS,      () => f.jobs,      f.jobs);
  buildGrpChips('gf-interests', GROUP_INTEREST_OPTIONS, () => f.interests, f.interests);
  buildGrpChips('gf-purposes',  GROUP_PURPOSE_OPTIONS,  () => f.purposes,  f.purposes);
  updateGfRange();
}

function updateGfRange() {
  const minEl = document.getElementById('gf-career-min');
  const maxEl = document.getElementById('gf-career-max');
  const fill  = document.getElementById('gf-career-fill');
  if (!minEl || !maxEl || !fill) return;
  let minV = parseInt(minEl.value), maxV = parseInt(maxEl.value);
  if (minV > maxV) { minEl.value = maxV; minV = maxV; }
  fill.style.left  = (minV * 25) + '%';
  fill.style.width = ((maxV - minV) * 25) + '%';
  document.querySelectorAll('#filter-group-body .range-label').forEach((l, i) => {
    l.classList.toggle('active', i >= minV && i <= maxV);
  });
  S.groupFilter.careerMin = minV; S.groupFilter.careerMax = maxV;
}

function applyGroupFilter() {
  closeGroupFilter();
  renderGroupList();
  const total = S.groupFilter.jobs.length + S.groupFilter.interests.length + S.groupFilter.purposes.length;
  const btn = document.getElementById('filter-btn');
  if (btn) btn.classList.toggle('active', total > 0);
}

// ═══════════════════════════════════
// FILTER
// ═══════════════════════════════════
function openFilter() {
  buildFilterSheet();
  const overlay = document.getElementById('filter-sheet');
  overlay.classList.remove('hidden');
  initSheetDrag(overlay, overlay.querySelector('.sheet'), closeFilter);
}
function closeFilter() { document.getElementById('filter-sheet').classList.add('hidden'); }

function initSheetDrag(overlay, sheet, onClose) {
  const handle = sheet.querySelector('.sheet-handle');
  if (!handle) return;
  let startY = 0, curY = 0, dragging = false;

  function onStart(e) {
    startY = e.touches ? e.touches[0].clientY : e.clientY;
    curY = 0;
    dragging = true;
    sheet.style.transition = 'none';
  }
  function onMove(e) {
    if (!dragging) return;
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    curY = Math.max(0, y - startY); // 아래 방향만
    sheet.style.transform = `translateY(${curY}px)`;
  }
  function onEnd() {
    if (!dragging) return;
    dragging = false;
    sheet.style.transition = '';
    if (curY > 80) {
      sheet.style.transform = `translateY(100%)`;
      setTimeout(() => { sheet.style.transform = ''; onClose(); }, 200);
    } else {
      sheet.style.transform = '';
    }
  }

  handle.addEventListener('touchstart', onStart, { passive: true });
  handle.addEventListener('touchmove', onMove, { passive: true });
  handle.addEventListener('touchend', onEnd);
  handle.addEventListener('mousedown', onStart);
  document.addEventListener('mousemove', onMove);
  document.addEventListener('mouseup', onEnd);
}

function buildFilterSheet() {
  const body = document.getElementById('filter-sheet-body');
  // Job categories accordion
  let html = `
    <div class="filter-section">
      <div class="filter-section-title">직무/직책 <span class="filter-count-badge" id="fc-job">0/50</span></div>
  `;
  JOB_CATEGORIES.forEach(cat => {
    html += `
      <div class="accordion-item" id="ac-${cat.id}">
        <div class="accordion-header" onclick="toggleAccordion('${cat.id}')">
          <div class="ac-left">
            <div class="accordion-check" id="ach-${cat.id}"></div>
            <span>${cat.label}</span>
          </div>
          <span class="accordion-arrow">∨</span>
        </div>
        <div class="accordion-body">
          ${cat.subs.map(s=>`<button class="chip" onclick="toggleJobChip(this,'${cat.id}','${s}')">${s}</button>`).join('')}
        </div>
      </div>
    `;
  });
  html += `</div>
    <div class="filter-section">
      <div class="filter-section-title">관심분야 <span class="filter-count-badge" id="fc-int">0/9</span></div>
      <div class="chip-row" id="interest-chips">
        ${INTEREST_LIST.map(s=>`<button class="chip" onclick="toggleInterestChip(this,'${s}')">${s}</button>`).join('')}
      </div>
    </div>
    <div class="filter-section">
      <div class="filter-section-title">경력</div>
      <div class="dual-range-wrap">
        <div class="dual-range-track"><div class="dual-range-fill" id="career-fill"></div></div>
        <input type="range" class="range-thumb" id="career-min" min="0" max="4" value="0" oninput="updateDualRange()">
        <input type="range" class="range-thumb" id="career-max" min="0" max="4" value="4" oninput="updateDualRange()">
      </div>
      <div class="range-labels">
        <span class="range-label" data-i="0">학생<br><span class="range-sub">-</span></span>
        <span class="range-label" data-i="1">신입<br><span class="range-sub">1년 이하</span></span>
        <span class="range-label" data-i="2">주니어<br><span class="range-sub">1~3년</span></span>
        <span class="range-label" data-i="3">미드레벨<br><span class="range-sub">4~9년</span></span>
        <span class="range-label" data-i="4">시니어<br><span class="range-sub">10년 이상</span></span>
      </div>
    </div>
    <div class="filter-section">
      <div class="filter-section-title">네트워킹 참여 목적 <span class="filter-count-badge" id="fc-purpose">0/7</span></div>
      <div class="chip-row">
        ${PURPOSES_LIST.map(p=>`<button class="chip" onclick="togglePurposeChip(this,'${p.id}')">${p.label}</button>`).join('')}
      </div>
    </div>
  `;
  body.innerHTML = html;
}

function toggleAccordion(id) {
  const item = document.getElementById('ac-'+id);
  item.classList.toggle('open');
}
function toggleJobChip(btn) { btn.classList.toggle('selected'); }
function toggleInterestChip(btn) { btn.classList.toggle('selected'); }
function togglePurposeChip(btn) { btn.classList.toggle('selected'); }
function updateDualRange() {
  const minEl = document.getElementById('career-min');
  const maxEl = document.getElementById('career-max');
  const fill = document.getElementById('career-fill');
  if (!minEl||!maxEl||!fill) return;
  let minV = parseInt(minEl.value), maxV = parseInt(maxEl.value);
  if (minV > maxV) { minEl.value = maxV; minV = maxV; }
  if (maxV < minV) { maxEl.value = minV; maxV = minV; }
  const pct = 25; // 100/4
  fill.style.left = (minV * pct) + '%';
  fill.style.width = ((maxV - minV) * pct) + '%';
  document.querySelectorAll('.range-label').forEach((l,i) => {
    l.classList.toggle('active', i >= minV && i <= maxV);
  });
}

function resetFilter() {
  buildFilterSheet();
  document.getElementById('filter-btn').classList.remove('active');
  document.getElementById('filter-count').style.display='none';
}

function applyFilter() {
  closeFilter();
  toast('필터가 적용됐어요');
  document.getElementById('filter-btn').classList.add('active');
  document.getElementById('filter-count').style.display='flex';
  document.getElementById('filter-count').textContent='1';
}

// ═══════════════════════════════════
// QR
// ═══════════════════════════════════
function goQR() {
  renderQR(); showScreen('qr');
}

function renderQR() {
  const body = document.getElementById('qr-body');
  const me = S.people.find(p => p.id === S.myId);
  if (!me) {
    body.innerHTML = `<div class="empty-state"><p>프로필을 먼저 등록해 주세요</p></div>`;
    return;
  }

  const rows = [
    ['직무/직책', me.role     || '-'],
    ['소속',     me.company  || '-'],
    ['휴대폰',   me.phone    || '-'],
    ['이메일',   me.email    || '-'],
  ];

  body.innerHTML = `
    <div class="biz-card-scene" onclick="flipBizCard(this)">
      <div class="biz-card">
        <div class="biz-card-face biz-card-front">
          <img class="biz-graphic biz-graphic-tr" src="${coloredGraphicSrc(GRAPHIC_UP_RIGHT, AV_COLORS[me.colIdx||0])}" alt="">
          <img class="biz-graphic biz-graphic-bl" src="${coloredGraphicSrc(GRAPHIC_UNDER_LEFT, AV_COLORS[me.colIdx||0])}" alt="">
          <div class="biz-name">${esc(me.name)}</div>
          <div class="biz-info-table">
            ${rows.map(([l, v]) => `
              <div class="biz-info-row">
                <span class="biz-label">${esc(l)}</span>
                <span class="biz-value">${esc(v)}</span>
              </div>`).join('')}
          </div>
          <div class="biz-avatar-wrap">
            ${(() => {
              const name = AVATARS[(me.avIdx||0) % AVATARS.length];
              const bg = AV_COLORS[(me.colIdx||0) % AV_COLORS.length];
              const svgBase64 = typeof SVG_DATA !== 'undefined' && SVG_DATA[name] ? SVG_DATA[name] : `characters/${name}.svg`;
              return `<div style="width:136px;height:136px;margin:0px 12px 12px 0;background-color:${bg};-webkit-mask:url('${svgBase64}') no-repeat center/contain;mask:url('${svgBase64}') no-repeat center/contain;"></div>`;
            })()}
          </div>
        </div>
        <div class="biz-card-face biz-card-back">
          <canvas id="biz-qr" width="160" height="160"></canvas>
        </div>
      </div>
    </div>
    <div id="biz-hint" style="display:flex;align-items:center;justify-content:center;gap:6px;margin-top:24px;font-size:14px;color:var(--semantic-text-normal)">
      <img id="biz-hint-icon" src="data:image/svg+xml;base64,${ICON_REPEAT}" width="20" height="20" style="flex-shrink:0">
      <span id="biz-hint-text">카드를 뒤집어 명함을 교환하세요!</span>
    </div>
  `;

  requestAnimationFrame(() => drawBizQR('biz-qr', me.id + me.name));
}

function flipBizCard(scene) {
  const card = scene.querySelector('.biz-card');
  card.classList.toggle('flipped');
  const isFlipped = card.classList.contains('flipped');
  document.getElementById('biz-hint-text').textContent = isFlipped ? 'QR코드를 스캔해주세요' : '카드를 뒤집어 명함을 교환하세요!';
  document.getElementById('biz-hint-icon').src = 'data:image/svg+xml;base64,' + (isFlipped ? ICON_SCANNER : ICON_REPEAT);
}

function drawBizQR(canvasId, seed) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const N = 21, sz = 7, pad = Math.floor((160 - N * sz) / 2);

  let h = 5381;
  for (let i = 0; i < seed.length; i++) h = ((h << 5) + h + seed.charCodeAt(i)) | 0;

  function cell(x, y) {
    const inTL = x < 7 && y < 7;
    const inTR = x > N-8 && y < 7;
    const inBL = x < 7 && y > N-8;
    if (inTL || inTR || inBL) {
      const inner = (inTL && x>=1&&x<=5&&y>=1&&y<=5) || (inTR && x>=N-6&&x<=N-2&&y>=1&&y<=5) || (inBL && x>=1&&x<=5&&y>=N-6&&y<=N-2);
      const core  = (inTL && x>=2&&x<=4&&y>=2&&y<=4) || (inTR && x>=N-5&&x<=N-3&&y>=2&&y<=4) || (inBL && x>=2&&x<=4&&y>=N-5&&y<=N-3);
      return core ? true : inner ? false : true;
    }
    if (x===7||y===7||x===N-8||(y===N-8&&x<7)) return false;
    return (((h ^ (x*127+y*251)) * 0x9e3779b9) >>> 0) % 3 !== 0;
  }

  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, 200, 200);
  ctx.fillStyle = '#000';
  for (let y = 0; y < N; y++)
    for (let x = 0; x < N; x++)
      if (cell(x, y)) ctx.fillRect(pad + x*sz, pad + y*sz, sz, sz);
}

// ═══════════════════════════════════
// NOTIFICATION
// ═══════════════════════════════════
function switchNotifTab(tab) {
  S.notifTab = tab;
  document.getElementById('notif-tab-1v1').classList.toggle('active', tab==='1v1');
  document.getElementById('notif-tab-group').classList.toggle('active', tab==='group');
  renderNotif();
}

function toggleNotif() {
  S.notifEnabled = !S.notifEnabled;
  renderNotif();
}

function renderNotif() {
  if (_notifListTimer) { clearInterval(_notifListTimer); _notifListTimer = null; }
  const nb = document.getElementById('notif-badge'); if (nb) nb.style.display = 'none';
  const body = document.getElementById('notif-body');
  const incoming = S.incomingRequests || [];
  body.innerHTML = '';

  // ── 토글 카드 ──
  const toggleCard = document.createElement('div');
  toggleCard.className = 'notif-toggle-card';
  toggleCard.innerHTML = `
    <div class="notif-toggle-info">
      <div class="notif-toggle-title">${S.notifEnabled ? '알림 ON' : '알림 OFF'}</div>
      <div class="notif-toggle-desc">네트워킹 요청을 확인하려면 알림을 켜야해요!</div>
    </div>
    <div class="toggle-switch${S.notifEnabled ? ' on notif-on' : ''}" onclick="toggleNotif()"></div>
  `;
  body.appendChild(toggleCard);
  body.insertAdjacentHTML('beforeend', '<div class="list-divider"></div>');

  if (S.notifTab === 'group') {
    body.insertAdjacentHTML('beforeend', `<div class="empty-state"><p>그룹 알림이 없어요</p></div>`);
    return;
  }

  // ── 일반 알림 항목 ──
  const allItems = [
    ...incoming.map(r => {
      const p = S.people.find(x => x.id === r.fromId);
      return { id: r.id, isIncoming: true, fromId: r.fromId, name: p?.name||'알 수 없음', avIdx: p?.avIdx||0, colIdx: p?.colIdx||0, arrivedAt: r.arrivedAt, time: r.time };
    }),
    ...S.expiredRequests,
    ...MOCK_NOTIFS.map(n => ({...n, isIncoming: false}))
  ];

  if (allItems.length === 0) {
    body.insertAdjacentHTML('beforeend', `<div class="empty-state"><p>받은 알림이 없어요. 네트워킹을 시작해보세요!</p></div>`);
    return;
  }

  const DURATION = 3 * 60 * 1000;

  allItems.forEach((item) => {
    const el = document.createElement('div');
    if (item.isIncoming) {
      el.className = 'notif-item timer-type';
      el.onclick = () => openRequestDetail(item.id);
      const elapsed = Date.now() - (item.arrivedAt || Date.now());
      const remaining = Math.max(0, DURATION - elapsed);
      const m = Math.floor(remaining / 60000);
      const s = Math.floor((remaining % 60000) / 1000);
      const timerStr = `${m}:${String(s).padStart(2,'0')}`;
      el.innerHTML = `
        <div class="notif-item-timer-row">
          <span class="notif-item-badge">네트워킹요청 <span class="notif-item-badge-timer" data-arrived="${item.arrivedAt||0}" id="notif-timer-${item.id}">${timerStr}</span></span>
          <span class="notif-chevron-right"></span>
        </div>
        <div class="notif-item-content-row">
          ${avDiv(item.avIdx, item.colIdx, 36, 32)}
          <div>
            <div class="notif-text"><b>${esc(item.name)}님</b>이 네트워킹을 신청했습니다!</div>
            <div class="notif-item-subtext">3분 내 응답하지 않으면 자동 취소됩니다.</div>
          </div>
        </div>
        <div class="notif-time">${item.time}</div>
      `;
    } else if (item.type === 'timeout') {
      el.className = 'notif-item timeout-type';
      el.innerHTML = `
        <div class="notif-item-body">
          <div class="notif-text">${esc(item.text)}</div>
          ${item.subtext ? `<div class="notif-item-subtext">${esc(item.subtext)}</div>` : ''}
          <div class="notif-time">${item.time}</div>
        </div>
      `;
    } else {
      el.className = 'notif-item';
      if (item.chatId) el.onclick = () => openChatRoom(item.chatId);
      el.innerHTML = `
        <div class="notif-dot${item.read?' read':''}"></div>
        <div class="notif-item-body">
          <div class="notif-text">${esc(item.text)}</div>
          <div class="notif-time">${item.time}</div>
        </div>
      `;
      item.read = true;
    }
    body.appendChild(el);
  });

  // 타이머 업데이트 (isIncoming 항목)
  if (incoming.length > 0) {
    _notifListTimer = setInterval(() => {
      let anyExpired = false;
      document.querySelectorAll('[id^="notif-timer-"]').forEach(span => {
        const arrivedAt = parseInt(span.dataset.arrived || '0');
        const remaining = Math.max(0, DURATION - (Date.now() - arrivedAt));
        if (remaining === 0) {
          const rid = span.id.replace('notif-timer-', '');
          const req = S.incomingRequests.find(r => r.id === rid);
          if (req) {
            const p = S.people.find(x => x.id === req.fromId);
            S.expiredRequests.unshift({
              id: 'exp-' + rid,
              type: 'timeout',
              isIncoming: false,
              text: `${p?.name||'알 수 없음'}님과의 네트워킹 요청이 만료되었어요`,
              subtext: [p?.role, p?.career ? p.career + '년차' : ''].filter(Boolean).join(' · '),
              time: '방금 전',
              read: true,
              chatId: null,
            });
            S.incomingRequests = S.incomingRequests.filter(r => r.id !== rid);
            anyExpired = true;
          }
        } else {
          const m = Math.floor(remaining / 60000);
          const s = Math.floor((remaining % 60000) / 1000);
          span.textContent = `${m}:${String(s).padStart(2,'0')}`;
        }
      });
      if (anyExpired) renderNotif();
    }, 1000);
  }
}

let _reqDetailTimer = null;
let _notifListTimer = null;

function _clearReqTimer() {
  if (_reqDetailTimer) { clearInterval(_reqDetailTimer); _reqDetailTimer = null; }
}

function openRequestDetail(rid) {
  const req = S.incomingRequests.find(r => r.id === rid);
  if (!req) return;
  const p = S.people.find(x => x.id === req.fromId);
  if (!p) return;

  const purposeObj = PURPOSES_LIST.find(x => x.id === p.purpose);
  const interests = p.interests || p.tags || [];

  document.getElementById('req-detail-body').innerHTML = `
    <div class="req-detail-card">
      <div class="req-detail-profile">
        <div class="req-detail-avatar">${avDiv(p.avIdx||0, p.colIdx||0, 72, 68)}</div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
          <div class="req-detail-name">${esc(p.name)}</div>
          <div class="req-detail-role">${[p.role, p.career].filter(Boolean).map(esc).join('(') + (p.career ? ')' : '')}</div>
        </div>
        <div class="req-detail-badge-row">
          <span class="req-detail-badge">네트워킹요청 <span class="req-badge-timer" id="req-timer">3:00</span></span>
        </div>
      </div>
      ${purposeObj ? `
      <div class="req-detail-section">
        <div class="req-detail-section-title">참여목적</div>
        <div class="req-detail-section-body">${esc(purposeObj.label)}</div>
      </div>` : ''}
      ${interests.length ? `
      <div class="req-detail-section">
        <div class="req-detail-section-title">관심사</div>
        <div class="req-detail-chips">${interests.map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div>
      </div>` : ''}
    </div>
  `;

  document.getElementById('req-action-panel').innerHTML = `
    <div class="req-action-inner">
      <div class="req-action-header">
        <span class="req-action-title">요청을 수락해 네트워킹 진행하시겠어요?</span>
      </div>
      <div class="req-action-desc">거절하면 네트워킹을 진행하지 않아요</div>
      <div class="modal-actions">
        <button class="modal-no" onclick="rejectRequest('${rid}')">거절</button>
        <button class="modal-yes" onclick="acceptRequest('${rid}')">수락</button>
      </div>
    </div>
  `;

  showScreen('req-detail');

  // 3분 카운트다운 타이머
  _clearReqTimer();
  const DURATION = 3 * 60 * 1000;
  const arrivedAt = req.arrivedAt || Date.now();

  function tick() {
    const el = document.getElementById('req-timer');
    if (!el) { _clearReqTimer(); return; }
    const remaining = DURATION - (Date.now() - arrivedAt);
    if (remaining <= 0) {
      _clearReqTimer();
      S.incomingRequests = S.incomingRequests.filter(r => r.id !== rid);
      showScreen('notif');
      renderNotif();
      toast('요청 시간이 만료되었어요');
      return;
    }
    const secs = Math.ceil(remaining / 1000);
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    el.textContent = `${m}:${String(s).padStart(2, '0')}`;
  }

  tick();
  _reqDetailTimer = setInterval(tick, 1000);
}

function acceptRequest(rid) {
  _clearReqTimer();
  const req = S.incomingRequests.find(r => r.id === rid);
  if (!req) return;
  S.incomingRequests = S.incomingRequests.filter(r => r.id !== rid);
  createChatIfNeeded(req.fromId);
  showScreen('notif');
  renderNotif();
  toast('네트워킹이 수락됐어요! 채팅을 시작해 보세요 🎉');
}

function rejectRequest(rid) {
  _clearReqTimer();
  S.incomingRequests = S.incomingRequests.filter(r => r.id !== rid);
  showScreen('notif');
  renderNotif();
  toast('요청을 거절했어요');
}

// ═══════════════════════════════════
// MYPAGE
// ═══════════════════════════════════
function renderMypage() {
  const body=document.getElementById('mypage-body');
  const me=S.people.find(p=>p.id===S.myId);
  body.innerHTML=`
    <div class="mypage-menu-card">
      <div class="menu-item" onclick="${me?`startReg('${me.id}')`:'startReg()'}">
        <span class="menu-label">내 정보 수정</span>
        <span class="menu-chevron"></span>
      </div>
      <div class="menu-item-divider"></div>
      <div class="menu-item" onclick="goQR()">
        <span class="menu-label">내 명함 보기</span>
        <span class="menu-chevron"></span>
      </div>
      <div class="menu-item-divider"></div>
      <div class="menu-item" onclick="toast('저장된 명함이 없어요')">
        <span class="menu-label">저장한 명함 목록</span>
        <span class="menu-chevron"></span>
      </div>
    </div>
  `;
}

// ═══════════════════════════════════
// CHAT
// ═══════════════════════════════════
function createChatIfNeeded(pid) {
  if (!S.chats[pid]) {
    S.chats[pid]={partnerId:pid,messages:[{id:'m'+Date.now(),from:'system',text:'네트워킹이 연결됐어요! 자유롭게 대화해 보세요 🎉',time:nowTime()}],unread:0};
    save();
  }
}

function openChatRoom(pid) {
  const partner=S.people.find(p=>p.id===pid);
  if(!partner)return;
  S.currentChat=pid;
  if(S.chats[pid])S.chats[pid].unread=0;
  document.getElementById('chatroom-title').textContent=partner.name;
  showScreen('chatroom');
  renderMsgs();
  requestAnimationFrame(()=>{const el=document.getElementById('chat-messages');if(el)el.scrollTop=el.scrollHeight;});
}

function renderMsgs() {
  const el=document.getElementById('chat-messages');
  if(!el||!S.currentChat)return;
  const chat=S.chats[S.currentChat];
  if(!chat)return;
  el.innerHTML='';
  chat.messages.forEach(m=>{
    if(m.from==='system'){const d=document.createElement('div');d.className='msg-system';d.textContent=m.text;el.appendChild(d);return;}
    if(m.type==='card'){
      const p2=S.people.find(x=>x.id===m.cardId);
      const row=document.createElement('div');
      row.className='msg-row'+(m.from==='me'?' me':'');
      if(m.from!=='me'){const av=S.people.find(x=>x.id===S.currentChat);const avEl=document.createElement('div');avEl.className='msg-av';avEl.innerHTML=av?avDiv(av.avIdx||0,av.colIdx||0,28):'';row.appendChild(avEl);}
      const bubble=document.createElement('div');
      bubble.className='chat-card-bubble';
      bubble.innerHTML=`${avDiv(p2?.avIdx||0,p2?.colIdx||0,36)}<div><div class="cc-name">${esc(p2?.name||'?')}</div><div class="cc-role">${esc(p2?.role||'')}</div></div>`;
      bubble.onclick=()=>openDetail(m.cardId,'chatroom');
      row.appendChild(bubble);el.appendChild(row);return;
    }
    const row=document.createElement('div');
    row.className='msg-row'+(m.from==='me'?' me':'');
    if(m.from!=='me'){const av=S.people.find(x=>x.id===S.currentChat);const avEl=document.createElement('div');avEl.className='msg-av';avEl.innerHTML=av?avDiv(av.avIdx||0,av.colIdx||0,28):'';row.appendChild(avEl);}
    const bubble=document.createElement('div');bubble.className='msg-bubble';bubble.textContent=m.text;
    const tEl=document.createElement('span');tEl.className='msg-time';tEl.textContent=m.time;
    row.appendChild(bubble);row.appendChild(tEl);el.appendChild(row);
  });
}

function sendMsg() {
  const ta=document.getElementById('chat-ta');
  const text=ta.value.trim();
  if(!text||!S.currentChat)return;
  const chat=S.chats[S.currentChat];if(!chat)return;
  chat.messages.push({id:'m'+Date.now(),from:'me',text,time:nowTime()});
  ta.value='';ta.style.height='';save();renderMsgs();
  const el=document.getElementById('chat-messages');if(el)el.scrollTop=el.scrollHeight;
  setTimeout(()=>{
    const replies=['네, 맞아요!','오, 흥미롭네요 👀','좋아요! 연락 드릴게요 😊','저도 비슷한 고민이에요.','같이 한번 해봐요!'];
    chat.messages.push({id:'m'+Date.now(),from:S.currentChat,text:replies[Math.floor(Math.random()*replies.length)],time:nowTime()});
    save();renderMsgs();if(el)el.scrollTop=el.scrollHeight;
  },1000+Math.random()*800);
}

function shareCard() {
  if(!S.myId||!S.currentChat)return;
  const chat=S.chats[S.currentChat];if(!chat)return;
  chat.messages.push({id:'m'+Date.now(),from:'me',type:'card',cardId:S.myId,time:nowTime()});
  save();renderMsgs();
  const el=document.getElementById('chat-messages');if(el)el.scrollTop=el.scrollHeight;
  toast('명함을 공유했어요 🪪');
}

function chatKey(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMsg();}}
function autoResize(el){el.style.height='auto';el.style.height=Math.min(el.scrollHeight,100)+'px';}
function backFromChat(){showScreen('home');renderHomeList();}
function openDetailFromChat(){if(S.currentChat)openDetail(S.currentChat,'chatroom');}

// ═══════════════════════════════════
// DETAIL
// ═══════════════════════════════════
function openDetail(id,from) {
  const p=S.people.find(x=>x.id===id);if(!p)return;
  S.prevScreen=from||'home';
  const isMe=p.id===S.myId;
  document.getElementById('d-av').innerHTML=avDiv(p.avIdx||0, p.colIdx||0, 80);
  document.getElementById('d-av').style.cssText='';
  document.getElementById('d-name').textContent=p.name;
  document.getElementById('d-role').textContent=p.role;
  document.getElementById('detail-title').textContent=p.name;
  const db=document.getElementById('d-body');
  const pObj=PURPOSES_LIST.find(x=>x.id===p.purpose);
  db.innerHTML=`
    ${p.bio?`<div class="info-card" style="padding:16px"><div style="font-size:11px;font-weight:700;color:var(--semantic-text-assistive);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">소개</div><p style="font-size:14px;line-height:1.6">${esc(p.bio)}</p></div>`:''}
    ${p.tags?.length?`<div class="info-card" style="padding:16px"><div style="font-size:11px;font-weight:700;color:var(--semantic-text-assistive);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px">관심사</div><div style="display:flex;flex-wrap:wrap;gap:6px">${p.tags.map(t=>`<span class="tag primary">${esc(t)}</span>`).join('')}</div></div>`:''}
    ${p.status?`<div class="info-card" style="padding:16px"><div style="font-size:11px;font-weight:700;color:var(--semantic-text-assistive);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">오늘의 상태</div><p style="font-size:15px;font-weight:600;color:var(--semantic-graphic-orange)">"${esc(p.status)}"</p></div>`:''}
    ${pObj?`<div class="info-card" style="padding:16px"><div style="font-size:11px;font-weight:700;color:var(--semantic-text-assistive);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">참여 목적</div><span class="purpose-tag"><img class="bm" src="icons/Icon_Bookmark_filled.svg">${esc(pObj.label)}</span></div>`:''}
    ${(p.email||p.link||p.company)?`<div class="info-card" style="padding:16px"><div style="font-size:11px;font-weight:700;color:var(--semantic-text-assistive);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px">연락처</div>${p.email?`<a href="mailto:${p.email}" style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--semantic-line-normal);text-decoration:none;color:var(--semantic-text-normal);font-size:14px"><span>✉️</span><span style="flex:1">${esc(p.email)}</span><span style="color:var(--semantic-text-assistive)">›</span></a>`:''}${p.company?`<div style="display:flex;align-items:center;gap:10px;padding:10px 0;font-size:14px"><span>🏢</span><span>${esc(p.company)}</span></div>`:''}</div>`:''}
    ${!isMe?`<div style="display:flex;gap:10px">
      <button class="btn btn-outline" style="flex:1" onclick="openNetModal('${p.id}')">🤝 네트워킹 신청</button>
      <button class="btn btn-primary" style="flex:1" onclick="chatFromDetail('${p.id}')">💬 채팅</button>
    </div>`:`<button class="btn btn-outline" onclick="startReg('${p.id}')">✏️ 프로필 수정</button>`}
  `;
  showScreen('detail');
}

function chatFromDetail(id) {
  createChatIfNeeded(id); closeDetail();
  setTimeout(()=>openChatRoom(id),50);
}

function closeDetail() {
  const prev=S.prevScreen||'home';S.prevScreen=null;
  if(prev==='chatroom')showScreen('chatroom');
  else showScreen('home');
}

// ═══════════════════════════════════
// UTILS
// ═══════════════════════════════════
function nowTime(){const d=new Date();return `${d.getHours()}:${String(d.getMinutes()).padStart(2,'0')}`;}

function esc(s){
  if(!s)return'';
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function toast(msg, sub){
  const el=document.getElementById('toast');
  el.innerHTML = sub
    ? `<div class="toast-title">${msg}</div><div class="toast-sub">${sub}</div>`
    : `<div class="toast-title">${msg}</div>`;
  el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'),3500);
}

// ═══════════════════════════════════
// INIT
// ═══════════════════════════════════
function init() {
  load();
  // QA: 항상 사전등록 화면으로 시작
  showScreen('reg-type');
}

init();
