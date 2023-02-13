release=$(lsb_release -rs)

sudo add-apt-repository universe
sudo apt update -y
sudo apt install build-essential -y

if (( $(echo "$release > 16" | bc -l) ))
then
  if ! grep -q "deb http://in.archive.ubuntu.com/ubuntu/ xenial main universe" "/etc/apt/sources.list"
  then
    echo "deb http://in.archive.ubuntu.com/ubuntu/ xenial main universe" | sudo tee -a /etc/apt/sources.list
  fi

  if ! grep -q "deb-src http://in.archive.ubuntu.com/ubuntu/ xenial main universe" "/etc/apt/sources.list"
  then
    echo "deb-src http://in.archive.ubuntu.com/ubuntu/ xenial main universe" | sudo tee -a /etc/apt/sources.list
  fi
fi

sudo apt update -y
sudo apt update -y
sudo apt install libsdl-image1.2 libsdl-image1.2-dev guile-2.0 \
guile-2.0-dev libsdl1.2debian libart-2.0-dev libaudiofile-dev \
libesd0-dev libdirectfb-dev libdirectfb-extra libfreetype6-dev \
libxext-dev x11proto-xext-dev libfreetype6 libaa1 libaa1-dev \
libslang2-dev libasound2 libasound2-dev -y

wget http://download.savannah.gnu.org/releases/libgraph/libgraph-1.0.2.tar.gz
tar -xf libgraph-1.0.2.tar.gz
cd libgraph-1.0.2

CPPFLAGS="$CPPFLAGS $(pkg-config --cflags-only-I guile-2.0)" \
CFLAGS="$CFLAGS $(pkg-config --cflags-only-other guile-2.0)" \
LDFLAGS="$LDFLAGS $(pkg-config --libs guile-2.0)" \
./configure

make
sudo make install

sudo cp /usr/local/lib/libgraph.* /usr/lib
