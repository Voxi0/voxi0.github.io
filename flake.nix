{
  description = "My personal website";

  # Flake inputs
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  # Things to do after fetching all dependencies
  outputs = inputs:
    inputs.flake-utils.lib.eachDefaultSystem (system: let
      pkgs = inputs.nixpkgs.legacyPackages.${system};
    in {
      devShells.default = pkgs.mkShellNoCC {
        nativeBuildInputs = with pkgs; [nodejs bun];
      };
    });
}
