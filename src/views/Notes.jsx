import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

function Notes() {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}
        // onClick={handleButtonClick}
      >
        <HomeIcon /> Home
      </Button>
      <img src="/ramsey.jpeg" alt="Frank Ramsey" />
      <h1>Frank Ramsey</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque
        porta elementum. Nullam eget eleifend augue. Sed ultrices eros metus,
        eget cursus odio rutrum eu. In varius ut dui vel fringilla. Nulla
        suscipit nunc quis iaculis ornare. Etiam sit amet nisl a massa feugiat
        scelerisque. Maecenas gravida blandit turpis, eget sagittis tortor
        molestie at. Ut interdum pretium elit pulvinar finibus. Aenean vitae
        neque ut nibh porttitor euismod non sed risus. Fusce vitae feugiat erat,
        at semper purus. Etiam venenatis ex lorem, vehicula posuere libero
        finibus eget. Suspendisse lobortis, neque ac accumsan elementum, risus
        dolor ultricies risus, non semper metus velit ac libero. Morbi placerat
        nisl ut tortor porta, vitae pellentesque ante varius. Maecenas laoreet
        placerat ex et imperdiet. Donec quis diam eu risus consectetur
        scelerisque vel nec sem. Ut nec porttitor ex, a scelerisque massa. Ut
        vel euismod mi. Mauris congue tincidunt nisl et molestie. Etiam
        imperdiet sagittis eros eget imperdiet. Vestibulum ullamcorper egestas
        eleifend. Praesent ultrices nisi sed neque sagittis luctus. In hac
        habitasse platea dictumst. Duis dignissim augue sed erat venenatis
        accumsan. Donec non malesuada ligula. Nam eleifend diam ac tempor
        malesuada. Sed vel porttitor felis, a convallis nisi. Cras elementum, ex
        quis hendrerit accumsan, mi erat finibus felis, ac accumsan ante nisi et
        ex. Donec vulputate, eros dictum luctus aliquet, ligula lacus hendrerit
        justo, ornare accumsan quam urna eu urna. Cras sit amet elit vel neque
        accumsan tristique. Vestibulum eleifend, justo quis venenatis gravida,
        lectus mi fermentum turpis, quis venenatis dui eros ac arcu. Cras
        scelerisque metus at auctor efficitur. Suspendisse potenti. Suspendisse
        rhoncus eget orci ut luctus. In mollis turpis id interdum varius. Nunc
        eu nisl tincidunt, condimentum ante eget, dictum ex. Quisque pretium
        mattis diam, ac consequat ligula gravida ut. Donec rhoncus elit nisi,
        quis facilisis dolor tincidunt vel. Mauris quis accumsan enim. Nullam
        pharetra hendrerit massa eget hendrerit. Phasellus vitae risus nisl.
        Curabitur dignissim metus eu orci tincidunt finibus. Ut finibus neque ut
        pretium iaculis. Etiam sagittis pellentesque lectus, vel faucibus massa
        fermentum eu. Proin blandit justo at ornare sagittis. Proin aliquet
        ligula justo, eu pharetra risus mollis eu. Nulla ac leo vestibulum,
        vulputate elit id, tristique justo. Etiam placerat faucibus sem sit amet
        mollis. Morbi erat nisl, varius vitae cursus vitae, lobortis vel sapien.
        Donec ut congue lorem, eu mattis elit. Vestibulum ac est in ante iaculis
        consectetur. Nam et volutpat leo. Quisque pharetra in ante vel accumsan.
        Nunc in finibus libero, eu facilisis tellus. Morbi maximus sollicitudin
        nibh eu accumsan. Praesent convallis non ipsum ut gravida. Sed mattis at
        ex quis viverra. Aenean pharetra imperdiet purus a sollicitudin. Donec
        porta accumsan imperdiet. Sed sollicitudin urna faucibus sodales
        volutpat. Aenean ac felis eu nisi consectetur ultricies.{" "}
      </p>
    </div>
  );
}

export default Notes;
